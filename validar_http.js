const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


function AvaliarErro(erro){
  throw new Error(erro.message)
}

async function ChecarStatus(arrayURLs){
    try{
    const arraystatus=await Promise.all(arrayURLs.map(async url=>{
    const resposta= await fetch(url);
    return resposta.status;
    }))
    return arraystatus;
    }catch(erro){
      AvaliarErro(erro)
    }
  }


function AcessarLinks(linksarrays){
    return linksarrays.map(elemento => Object.values(elemento).join())
    };


async function ValidarURL(linksarrays){
   const links=AcessarLinks(linksarrays);
   const statusLinks=await ChecarStatus(links)
   const results= linksarrays.map((objeto,indice) =>( {...objeto, status:statusLinks[indice]
   
   }))
   return results
}



module.exports=ValidarURL;