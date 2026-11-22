const fs=require('fs');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,BorderStyle,ShadingType,AlignmentType,LevelFormat,PositionalTab,PositionalTabAlignment,PositionalTabRelativeTo,PositionalTabLeader,Footer,HeadingLevel}=require('docx');
const DATA=require('./data.js'), OUT=process.argv[2];
const C={accent:'5B3FA0',soft:'EEE9F8',muted:'666666'};
const W=11906-2*1080; // largeur utile A4
const line=()=>new Paragraph({spacing:{before:220,after:0},border:{bottom:{style:BorderStyle.DOTTED,size:6,color:'999999',space:1}},children:[new TextRun(' ')]});
const lbl=(t,rest)=>new Paragraph({spacing:{before:80,after:20},children:[new TextRun({text:t,bold:true}),...(rest?[new TextRun({text:rest})]:[])]});
const fill=(t)=>new Paragraph({spacing:{before:200,after:0},border:{bottom:{style:BorderStyle.DOTTED,size:6,color:'999999',space:1}},children:[new TextRun({text:t,bold:true})]});
const b1={style:BorderStyle.SINGLE,size:6,color:'BBBBBB'};
const cell=(kids,w,shade)=>new TableCell({width:{size:w,type:WidthType.DXA},margins:{top:80,bottom:80,left:120,right:120},borders:{top:b1,bottom:b1,left:b1,right:b1},shading:shade?{fill:shade,type:ShadingType.CLEAR,color:'auto'}:undefined,children:kids});
function fiche(g){
  const h=W/2, blank=()=>new Paragraph({spacing:{before:0,after:0},children:[new TextRun(' ')]});
  return [
    new Paragraph({pageBreakBefore:true,spacing:{after:0},children:[new TextRun({text:'SNT · Brain Exploration · '+(g.n<14?'Jeu '+g.n+' · paire '+g.pair:'Enquête finale'),size:18,color:C.muted})]}),
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:g.e+'  '+(g.n<14?g.n+' · ':'')+g.t})]}),
    new Paragraph({spacing:{before:0,after:80},children:[new TextRun({text:'Nom, prénom : ',bold:true}),new TextRun({text:'……………………………………………………',color:'999999'}),new TextRun({text:'   Classe : ',bold:true}),new TextRun({text:'…………',color:'999999'}),new TextRun({text:'   Date : ',bold:true}),new TextRun({text:'……………',color:'999999'})]}),
    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun("L'activité")]}),
    new Paragraph({spacing:{after:40},children:[new TextRun(g.intro)]}),
    ...g.steps.map(s=>new Paragraph({numbering:{reference:'steps-'+g.id,level:0},spacing:{after:20},children:[new TextRun(s)]})),
    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun("Ce que j'ai observé")]}),
    ...g.obs.flatMap(q=>[lbl(q),line(),line(),line()]),
    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun("Ce que j'ai compris")]}),
    fill(g.n<14?'Ce que fait mon cerveau : ':'Le mécanisme que je reconnais le mieux : '),
    fill(g.n<14?'Son superpouvoir (pourquoi il a aidé nos ancêtres) : ':'Pourquoi il a aidé nos ancêtres : '),
    line(),
    new Paragraph({spacing:{before:80,after:40},children:[]}),
    new Table({width:{size:W,type:WidthType.DXA},columnWidths:[h,h],rows:[
      new TableRow({children:[cell([new Paragraph({children:[new TextRun({text:"✅ Quand ça m'aide (un exemple de ma vie)",bold:true})]})],h,'E8F5E9'),cell([new Paragraph({children:[new TextRun({text:'⚠️ Quand ça me piège (un exemple de ma vie)',bold:true})]})],h,'FDECEA')]}),
      new TableRow({children:[cell([blank(),blank(),blank(),blank(),blank()],h),cell([blank(),blank(),blank(),blank(),blank()],h)]})]}),
    lbl('🤖 Et l\'IA ? ',g.aiq),line(),line(),
    new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun('Ma découverte en une phrase')]}),
    new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],rows:[new TableRow({children:[cell([new Paragraph({children:[new TextRun({text:g.ask,italics:true,color:C.muted})]}),blank(),blank(),blank()],W,C.soft)]})]}),
  ];
}
function corrige(g){
  const r=(t,v)=>new Paragraph({spacing:{after:40},children:[new TextRun({text:t,bold:true}),new TextRun(v)]});
  return [
    new Paragraph({heading:HeadingLevel.HEADING_2,keepNext:true,children:[new TextRun(g.e+'  '+(g.n<14?g.n+' · ':'')+g.t)]}),
    r('Ce qu\'il faut avoir compris : ',g.key.meca), r('Superpouvoir : ',g.key.power), r('Quand ça aide : ',g.key.help), r('Quand ça piège : ',g.key.trap), r('Et l\'IA ? ',g.key.ai), r('Phrase attendue (exemple) : ','« '+g.key.phrase+' »')];
}
const numbering={config:DATA.map(g=>({reference:'steps-'+g.id,levels:[{level:0,format:LevelFormat.DECIMAL,text:'%1.',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:400,hanging:280}}}}]}))};
const styles={default:{document:{run:{font:'Arial',size:21}}},paragraphStyles:[
  {id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Arial',size:34,bold:true,color:C.accent},paragraph:{spacing:{before:40,after:100},keepNext:true,outlineLevel:0}},
  {id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Arial',size:24,bold:true,color:C.accent},paragraph:{spacing:{before:200,after:60},keepNext:true,outlineLevel:1,border:{bottom:{style:BorderStyle.SINGLE,size:6,color:'C9BEE6',space:2}}}}]};
const page={size:{width:11906,height:16838},margin:{top:900,bottom:900,left:1080,right:1080}};
const footer=new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:'Tout le monde tombe dans ces pièges, ton prof aussi : ce sont des superpouvoirs de notre cerveau.',size:16,color:C.muted})]})]});
const mk=(children)=>new Document({creator:'SNT',styles,numbering,sections:[{properties:{page},footers:{default:footer},children}]});
(async()=>{
  fs.mkdirSync(OUT,{recursive:true});
  const slug=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  for(const g of DATA){ const f=`${OUT}/${String(g.n).padStart(2,'0')}-${slug(g.t)}.docx`; fs.writeFileSync(f,await Packer.toBuffer(mk(fiche(g)))); }
  fs.writeFileSync(`${OUT}/toutes-les-fiches.docx`,await Packer.toBuffer(mk(DATA.flatMap(fiche))));
  fs.writeFileSync(`${OUT}/corrige-enseignant.docx`,await Packer.toBuffer(mk([
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun('Brain Exploration · corrigé enseignant')]}),
    new Paragraph({spacing:{after:120},children:[new TextRun({text:"Ce que chaque élève devrait avoir compris après le jeu. Aucune réponse n'est sanctionnée : tomber dans le piège fait partie de la découverte.",color:C.muted})]}),
    ...DATA.flatMap(corrige)])));
  console.log(fs.readdirSync(OUT).join('\n'));
})();
