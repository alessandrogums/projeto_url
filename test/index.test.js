const PegarArquivo = require('../index')
const ResultadoArray=[
    {FileList:'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'}
]
describe('PegarArquivo::', ()=>{
    it('necessário ser uma function', ()=>
       expect( typeof PegarArquivo).toBe('function'))
})
    it('deve retornar um array com resultados',async  ()=> {
        const resultss= await PegarArquivo('//caminho do diretório para o arquivo em questão')
        expect (resultss).toEqual(ResultadoArray)})

