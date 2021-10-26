
const PegarArquivo=require('./index.js')
const chalk=require('chalk')
const ValidarURL=require('./validar_http')
const caminho= process.argv;

async function ProcessarTexto(caminhoarquivo){
    const resultado=await PegarArquivo(caminhoarquivo[2]);
    if (caminho[3]==='validar'){
        console.log(chalk.yellow('liks validados'),await ValidarURL(resultado))
    }else{
        console.log(chalk.yellowBright('lista de links'),resultado);
    }
    
}
ProcessarTexto(caminho)