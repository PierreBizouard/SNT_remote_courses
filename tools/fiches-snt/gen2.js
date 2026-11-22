// fiches élève Word (une page A4 par jeu) + corrigé, pour Binaire Attack et Techno Survivor
// usage : node gen2.js data.js dossier_sortie
const fs=require('fs'), path=require('path');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,BorderStyle,ShadingType,AlignmentType,LevelFormat,Footer,HeadingLevel}=require('docx');
const S=require(path.resolve(process.argv[2])), OUT=process.argv[3];
const C={accent:'5B3FA0',soft:'EEE9F8',muted:'666666'};
const W=11906-2*1080;
const NB={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
const lines=(n)=>new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],borders:{top:NB,bottom:NB,left:NB,right:NB,insideHorizontal:NB,insideVertical:NB},rows:Array.from({length:n},()=>new TableRow({height:{value:400,rule:'atLeast'},children:[new TableCell({width:{size:W,type:WidthType.DXA},borders:{top:NB,left:NB,right:NB,bottom:{style:BorderStyle.DOTTED,size:6,color:'999999'}},children:[new Paragraph({children:[]})]})]}))});
const line=()=>lines(1);
const lbl=(t,rest)=>new Paragraph({spacing:{before:80,after:20},keepNext:true,children:[new TextRun({text:t,bold:true}),...(rest?[new TextRun({text:rest})]:[])]});
const b1={style:BorderStyle.SINGLE,size:6,color:'BBBBBB'};
const cell=(kids,w,shade)=>new TableCell({width:{size:w,type:WidthType.DXA},margins:{top:80,bottom:80,left:120,right:120},borders:{top:b1,bottom:b1,left:b1,right:b1},shading:shade?{fill:shade,type:ShadingType.CLEAR,color:'auto'}:undefined,children:kids});
const blank=()=>new Paragraph({spacing:{before:0,after:0},children:[new TextRun(' ')]});
const H2=t=>new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun(t)]});
function fiche(g){
  const ex=g.exos||[], q=W*0.62, a=W-q;
  return [
    new Paragraph({pageBreakBefore:true,spacing:{after:0},children:[new TextRun({text:'SNT · '+S.name+' · '+g.label+(g.sub?' · '+g.sub:''),size:18,color:C.muted})]}),
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun(g.e+'  '+g.label+' · '+g.t)]}),
    new Paragraph({spacing:{before:0,after:80},children:[new TextRun({text:'Nom, prénom : ',bold:true}),new TextRun({text:'……………………………………………………',color:'999999'}),new TextRun({text:'   Classe : ',bold:true}),new TextRun({text:'…………',color:'999999'}),new TextRun({text:'   Date : ',bold:true}),new TextRun({text:'……………',color:'999999'})]}),
    H2("L'activité"),
    new Paragraph({spacing:{after:40},children:[new TextRun(g.intro)]}),
    ...g.steps.map(s=>new Paragraph({numbering:{reference:'steps-'+g.n,level:0},spacing:{after:20},children:[new TextRun(s)]})),
    H2("Ce que j'ai observé"),
    ...g.obs.flatMap(o=>[lbl(o),lines(3)]),
    H2("Ce que j'ai compris"),
    ...g.understand.flatMap(u=>[lbl(u),lines(2)]),
    ...(ex.length?[H2("Je m'entraîne"),new Table({width:{size:W,type:WidthType.DXA},columnWidths:[q,a],rows:ex.map(([t])=>new TableRow({children:[cell([new Paragraph({children:[new TextRun(t)]})],q,C.soft),cell([blank()],a)]}))})]:[]),
    H2('Ma découverte en une phrase'),
    new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],rows:[new TableRow({children:[cell([new Paragraph({children:[new TextRun({text:g.ask,italics:true,color:C.muted})]}),blank(),blank(),blank()],W,C.soft)]})]}),
  ];
}
function corrige(g){
  return [new Paragraph({heading:HeadingLevel.HEADING_2,keepNext:true,children:[new TextRun(g.e+'  '+g.label+' · '+g.t)]}),
    ...g.key.map(([k,v])=>new Paragraph({spacing:{after:40},children:[new TextRun({text:k+' : ',bold:true}),new TextRun(v)]}))];
}
const numbering={config:S.fiches.map(g=>({reference:'steps-'+g.n,levels:[{level:0,format:LevelFormat.DECIMAL,text:'%1.',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:400,hanging:280}}}}]}))};
const styles={default:{document:{run:{font:'Arial',size:21}}},paragraphStyles:[
  {id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Arial',size:34,bold:true,color:C.accent},paragraph:{spacing:{before:40,after:100},keepNext:true,outlineLevel:0}},
  {id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',quickFormat:true,run:{font:'Arial',size:24,bold:true,color:C.accent},paragraph:{spacing:{before:200,after:60},keepNext:true,outlineLevel:1,border:{bottom:{style:BorderStyle.SINGLE,size:6,color:'C9BEE6',space:2}}}}]};
const page={size:{width:11906,height:16838},margin:{top:900,bottom:900,left:1080,right:1080}};
const footer=new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:S.foot,size:16,color:C.muted})]})]});
const mk=children=>new Document({creator:'SNT',styles,numbering,sections:[{properties:{page},footers:{default:footer},children}]});
const slug=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
(async()=>{
  fs.mkdirSync(OUT,{recursive:true});
  for(const g of S.fiches) fs.writeFileSync(`${OUT}/${String(g.n).padStart(2,'0')}-${slug(g.t)}.docx`,await Packer.toBuffer(mk(fiche(g))));
  fs.writeFileSync(`${OUT}/toutes-les-fiches.docx`,await Packer.toBuffer(mk(S.fiches.flatMap(fiche))));
  fs.writeFileSync(`${OUT}/corrige-enseignant.docx`,await Packer.toBuffer(mk([
    new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun(S.name+' · corrigé enseignant')]}),
    new Paragraph({spacing:{after:120},children:[new TextRun({text:"Ce que chaque élève devrait avoir compris après le jeu, et les réponses des exercices.",color:C.muted})]}),
    ...S.fiches.flatMap(corrige)])));
  console.log(fs.readdirSync(OUT).join(' '));
})();
