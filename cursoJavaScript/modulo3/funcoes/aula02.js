function funcao1(){
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}
const filipe = {
    nome: 'Filipe',
    funcao1,
    funcao2
}

filipe.funcao1()
filipe.funcao2()