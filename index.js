const chalk=require('chalk')
const fs= require('fs')


function ExtrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const Resultados=[];
    let variavel_temporaria;
    while((variavel_temporaria=regex.exec(texto)) !=null){
        Resultados.push({[variavel_temporaria[1]]:variavel_temporaria[2]})
    }return Resultados.length === 0 ? 'não existe links' :Resultados ;
}

function TratarErro(erro){
    throw new Error(chalk.redBright(erro.code,'não existe caminho no arquivo!'));
}

async function PegarArquivo(caminhodoarquivo){
    const encoding='utf-8';
    try{
    const texto= await fs.promises.readFile(caminhodoarquivo,encoding);
    return (ExtrairLinks(texto))
    }catch(erro){
        TratarErro(erro)
    }
}


module.exports=PegarArquivo