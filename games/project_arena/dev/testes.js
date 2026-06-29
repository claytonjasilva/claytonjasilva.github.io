// ============================================================
// Descrição geral: testes automáticos da Release 1.2
// Data de criação: 29/06/2026
// Versão: 1.2
// Copyright: Clayton Silva
// ============================================================

const resultados = [];

function registrarTeste(nome, condicao) {
    resultados.push({
        nome: nome,
        sucesso: Boolean(condicao)
    });
}

function executarTestes() {

    // --------------------------------------------------------
    // Testes das bases de dados
    // --------------------------------------------------------

    registrarTeste("Array desafios existe", typeof desafios !== "undefined");
    registrarTeste("Array equipes existe", typeof equipes !== "undefined");

    registrarTeste("Quantidade de missões = 30", desafios.length === 30);
    registrarTeste("Quantidade de equipes = 3", equipes.length === 3);

    // --------------------------------------------------------
    // Testes das missões
    // --------------------------------------------------------

    const ids = desafios.map(missao => missao.id);
    const idsUnicos = new Set(ids);

    registrarTeste("IDs das missões são únicos", ids.length === idsUnicos.size);

    registrarTeste("Todas as missões possuem título", desafios.every(missao => missao.titulo));
    registrarTeste("Todas as missões possuem tema", desafios.every(missao => missao.tema));
    registrarTeste("Todas as missões possuem enunciado", desafios.every(missao => missao.enunciado));
    registrarTeste("Todas as missões possuem dificuldade", desafios.every(missao => missao.dificuldade));
    registrarTeste("Todas as missões possuem tempo válido", desafios.every(missao => missao.tempo > 0));
    registrarTeste("Todas as missões possuem pontos válidos", desafios.every(missao => missao.pontos > 0));
    registrarTeste("Todas as missões possuem XP válido", desafios.every(missao => missao.xp > 0));

    registrarTeste(
        "Todas as missões possuem alternativas A, B, C e D",
        desafios.every(missao =>
            missao.alternativas &&
            missao.alternativas.A &&
            missao.alternativas.B &&
            missao.alternativas.C &&
            missao.alternativas.D
        )
    );

    registrarTeste(
        "Todas as respostas corretas são válidas",
        desafios.every(missao =>
            ["A", "B", "C", "D"].includes(missao.correta)
        )
    );

    registrarTeste(
        "Todas as missões possuem feedback correto",
        desafios.every(missao => missao.feedbackCorreto)
    );

    registrarTeste(
        "Todas as missões possuem feedback de erro",
        desafios.every(missao => missao.feedbackErro)
    );

    // --------------------------------------------------------
    // Testes das equipes
    // --------------------------------------------------------

    registrarTeste("Equipe Alpha existe", equipes.some(eq => eq.id === "alpha"));
    registrarTeste("Equipe Beta existe", equipes.some(eq => eq.id === "beta"));
    registrarTeste("Equipe Gama existe", equipes.some(eq => eq.id === "gama"));

    registrarTeste("Todas as equipes possuem nome", equipes.every(eq => eq.nome));
    registrarTeste("Todas as equipes possuem pontos", equipes.every(eq => typeof eq.pontos === "number"));
    registrarTeste("Todas as equipes possuem XP", equipes.every(eq => typeof eq.xp === "number"));
    registrarTeste("Todas as equipes possuem nível", equipes.every(eq => eq.nivel));

    // --------------------------------------------------------
    // Testes das funções principais
    // --------------------------------------------------------

    registrarTeste("Função iniciarSessao existe", typeof iniciarSessao === "function");
    registrarTeste("Função finalizarSessao existe", typeof finalizarSessao === "function");
    registrarTeste("Função reiniciarTudo existe", typeof reiniciarTudo === "function");

    registrarTeste("Função sortearMissoes existe", typeof sortearMissoes === "function");
    registrarTeste("Função obterMissaoAtual existe", typeof obterMissaoAtual === "function");
    registrarTeste("Função liberarMissao existe", typeof liberarMissao === "function");
    registrarTeste("Função encerrarMissao existe", typeof encerrarMissao === "function");
    registrarTeste("Função responderMissao existe", typeof responderMissao === "function");

    registrarTeste("Função atualizarRanking existe", typeof atualizarRanking === "function");
    registrarTeste("Função atualizarPainelEquipe existe", typeof atualizarPainelEquipe === "function");
    registrarTeste("Função calcularNivel existe", typeof calcularNivel === "function");

    registrarTeste("Função iniciarCronometro existe", typeof iniciarCronometro === "function");
    registrarTeste("Função pararCronometro existe", typeof pararCronometro === "function");
    registrarTeste("Função zerarCronometro existe", typeof zerarCronometro === "function");

    registrarTeste("Função registrarHistorico existe", typeof registrarHistorico === "function");
    registrarTeste("Função gerarRelatorioFinal existe", typeof gerarRelatorioFinal === "function");
    registrarTeste("Função atualizarHistoricoNaTela existe", typeof atualizarHistoricoNaTela === "function");

    // --------------------------------------------------------
    // Teste de sorteio
    // --------------------------------------------------------

    const missoesSorteadas = sortearMissoes(10);

    registrarTeste("Sorteio retorna 10 missões", missoesSorteadas.length === 10);

    registrarTeste(
        "Missões sorteadas possuem IDs válidos",
        missoesSorteadas.every(missao => ids.includes(missao.id))
    );

    // --------------------------------------------------------
    // Exibir resultados
    // --------------------------------------------------------

    exibirResultados();
}

function exibirResultados() {
    const area = document.getElementById("resultadoTestes");

    if (!area) {
        console.table(resultados);
        return;
    }

    let html = "<table>";
    html += "<tr><td>Teste</td><td>Resultado</td></tr>";

    resultados.forEach(teste => {
        html += `
            <tr>
                <td>${teste.nome}</td>
                <td>${teste.sucesso ? "✅ OK" : "❌ ERRO"}</td>
            </tr>
        `;
    });

    html += "</table>";

    const total = resultados.length;
    const aprovados = resultados.filter(teste => teste.sucesso).length;
    const reprovados = total - aprovados;

    html += `
        <h3>Resumo</h3>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Aprovados:</strong> ${aprovados}</p>
        <p><strong>Reprovados:</strong> ${reprovados}</p>
    `;

    if (reprovados === 0) {
        html += `<h2>✅ Release aprovada</h2>`;
    } else {
        html += `<h2>❌ Release com pendências</h2>`;
    }

    area.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", executarTestes);