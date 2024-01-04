const lista = [{nome: 'Filipe'}, {nome: 'Fulano'}, {nome: 'Ciclano'}]

const elementoEmHtml = lista.filter((e) => e.nome.startsWith('F'))
    .map(e => `<li> ${e.nome}</li>`)
    .join('')
console.log(elementoEmHtml)
// console.log(lista.map(e => e.nome)
//     .filter((e) => e.startsWith('F'))
//     .join('; ')
// )

// console.log(lista.map((e) => e.nome).join('; '))