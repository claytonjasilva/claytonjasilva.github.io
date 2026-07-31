#!/usr/bin/env python3
"""Gera search-index.json a partir dos arquivos HTML e Markdown do repositório."""

from __future__ import annotations

import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "search-index.json"
IGNORED_DIRS = {".git", ".github", "node_modules", "venv", ".venv"}


class TextExtractor(HTMLParser):
    """Extrai título e texto visível de uma página HTML."""

    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []
        self.title_parts: list[str] = []
        self.in_title = False
        self.skip_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "title":
            self.in_title = True
        if tag in {"script", "style", "svg"}:
            self.skip_depth += 1

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if tag in {"script", "style", "svg"} and self.skip_depth:
            self.skip_depth -= 1

    def handle_data(self, data: str) -> None:
        if self.skip_depth:
            return
        clean = " ".join(data.split())
        if not clean:
            return
        self.parts.append(clean)
        if self.in_title:
            self.title_parts.append(clean)


def clean_markdown(text: str) -> str:
    """Remove a maior parte da marcação Markdown, preservando o conteúdo textual."""
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)
    text = re.sub(r"`([^`]*)`", r"\1", text)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"^\s{0,3}#{1,6}\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"[*_~>|-]", " ", text)
    return " ".join(text.split())


def markdown_title(text: str, fallback: str) -> str:
    match = re.search(r"^\s{0,3}#\s+(.+)$", text, flags=re.MULTILINE)
    return match.group(1).strip() if match else fallback


def should_index(path: Path) -> bool:
    if path.name in {OUTPUT.name, "index_ajustado.html"}:
        return False
    return path.suffix.lower() in {".html", ".md"} and not any(part in IGNORED_DIRS for part in path.parts)


def main() -> None:
    entries: list[dict[str, str]] = []

    for path in sorted(ROOT.rglob("*")):
        if not path.is_file() or not should_index(path):
            continue

        try:
            raw = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue

        relative = path.relative_to(ROOT).as_posix()
        fallback_title = path.stem.replace("_", " ").replace("-", " ").title()

        if path.suffix.lower() == ".html":
            parser = TextExtractor()
            parser.feed(raw)
            title = " ".join(parser.title_parts).strip() or fallback_title
            text = " ".join(parser.parts)
        else:
            title = markdown_title(raw, fallback_title)
            text = clean_markdown(raw)

        description = text[:220].rstrip()
        if len(text) > 220:
            description += "…"

        entries.append({
            "title": title,
            "url": relative,
            "description": description,
            "text": text,
        })

    OUTPUT.write_text(json.dumps(entries, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Índice gerado: {OUTPUT.name} ({len(entries)} arquivos).")


if __name__ == "__main__":
    main()
