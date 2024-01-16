const fs = require('fs')
const path = require('path')

const filepath = path.resolve(__dirname, 'tarefas.csv')

const promessaDaLeitura = fs.promises.readFile(filepath)

promessaDaLeitura
.then((arquivo) => arquivo.toString('utf8'))
.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
.then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return{
        nome,
        feito: feito ==='true'
    }
}))
.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((error) => {
    console.log('Deu ruim!', error )
})
