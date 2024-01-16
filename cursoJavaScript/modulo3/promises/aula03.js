const { error } = require('console')
const fs = require('fs')
const path = require('path')

const filepath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo(){
    try{
        const arquive = await fs.promises.readFile(filepath)
        const textoDoArquivo = arquive.toString('utf8')
        console.log(textoDoArquivo)
    } catch(error){
        console.log(error)
    } finally{
        console.log('Finalizou')
    }
}
buscarArquivo()