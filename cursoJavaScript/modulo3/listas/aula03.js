class Pessoa{
    constructor(name){
        this.name = name
    }
}


const lista = [new Pessoa('Filipe'), new Pessoa('Fulano'), new Pessoa('Beltrano'), new Pessoa('Ciclano')]


const listaNomes = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    `
})

console.log(listaNomes)

// const listaNomes = []

// for (let i = 0; i < lista.length; i++) {
//     const element = lista[i];
//     listaNomes.push(element.name)
    
// }
// console.log(listaNomes)
