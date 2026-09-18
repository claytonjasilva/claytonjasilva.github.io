'use strict';
(function(root){
  function parseXML(text){
    if (/<!DOCTYPE|<!ENTITY/i.test(text)) throw Error('XML com DTD ou entidades não é aceito. Exporte novamente pelo MS Project.');
    const doc=new DOMParser().parseFromString(text,'application/xml');
    if(doc.getElementsByTagName('parsererror').length||doc.documentElement.localName!=='Project') throw Error('Arquivo XML inválido. Use o XML exportado pelo MS Project.');
    const children=(node,name)=>Array.from(node.children).filter(x=>x.localName===name);
    const value=(node,name)=>children(node,name)[0]?.textContent.trim()||'';
    const tasks=children(doc.documentElement,'Tasks')[0];
    if(!tasks)throw Error('O XML não contém tarefas para importar.');
    const elements=[],stack=[],codes=new Set(),uids=new Set();
    for(const task of children(tasks,'Task')){
      if(['1','true'].includes(value(task,'IsNull')))continue;
      const uid=value(task,'UID'),outline=value(task,'OutlineNumber'),raw=value(task,'OutlineLevel');
      if(raw==='0'||uid==='0')continue; // Project summary is not a deliverable.
      const level=raw?Number(raw):(/^\d+(\.\d+)*$/.test(outline)?outline.split('.').length:NaN);
      const name=value(task,'Name'),code=value(task,'WBS')||outline;
      if(!name||!code||!Number.isInteger(level)||level<1)throw Error('Uma tarefa não tem nome, código EAP ou nível válido. Confira a exportação.');
      if(codes.has(code))throw Error('Código EAP duplicado no arquivo: '+code);
      if(uid&&uids.has(uid))throw Error('Identificador de tarefa duplicado: '+uid);
      if(level>stack.length+1)throw Error('Hierarquia incompleta na tarefa '+code+'. Exporte a EAP completa com seus elementos superiores.');
      stack.length=level-1;
      const milestone=['1','true'].includes(value(task,'Milestone'));
      const item={id:crypto.randomUUID(),code,name,parent:level===1?'':stack[level-2].id,description:value(task,'Notes'),sourceUID:uid,sourceOutline:outline,milestone};
      elements.push(item);stack.push(item);codes.add(code);if(uid)uids.add(uid);
      if(elements.length>5000)throw Error('Importe no máximo 5.000 elementos por arquivo.');
    }
    if(!elements.length)throw Error('O arquivo não contém elementos da EAP além do resumo do projeto.');
    return elements;
  }
  function append(project,elements){
    if(project.closed)throw Error('Abra um novo ciclo antes de importar a EAP.');
    const codes=new Set(project.eap.map(e=>e.code));
    for(const e of elements){if(codes.has(e.code))throw Error('O código '+e.code+' já existe na EAP. Ajuste os códigos antes de importar; nenhum elemento foi alterado.');codes.add(e.code);}
    const copy=structuredClone(project);copy.eap.push(...structuredClone(elements));return copy;
  }
  function nextCode(project,parent=''){
    const prefix=parent?(project.eap.find(e=>e.id===parent)?.code+'.'):'';
    const suffixes=project.eap.filter(e=>e.parent===parent&&e.code.startsWith(prefix)).map(e=>e.code.slice(prefix.length)).filter(s=>/^\d+$/.test(s)).map(Number);
    let n=Math.max(0,...suffixes)+1;
    while(project.eap.some(e=>e.code===prefix+n))n++;
    return prefix+n;
  }
  root.ProjectEAP={parseXML,append,nextCode};
})(globalThis);
