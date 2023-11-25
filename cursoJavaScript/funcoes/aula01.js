// function sayMyName(name){
//     console.log(`Your name is ${name}`);
// }

// sayMyName('Filipe');

// function quadrado(valor){
//    return valor * valor;
// }

// // const quadradoDeDaz = quadrado(10);

// console.log(quadrado(10) + quadrado(20))

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(incrementarJuros(56, 12))