interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}
const pessoa: Pessoa = {
    nome: 'Filipe',
    idade: 23
}
const outraPessoa: Pessoa = {
    nome: 'Fulano',
    idade: 19,
    profissao: 'Estudante'
}

const arrayPessoa: Pessoa[] /*ou Array<Pessoa> */ = [
    pessoa,
    outraPessoa
]
const arrayNum: number[] = [
    1,
    2,
    3
]
const arrayString: Array<string> = [
    '1',
    '2',
    '3'
]