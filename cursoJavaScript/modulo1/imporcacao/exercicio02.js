
const { gets, print } = require('./funcoes-auxiliares-ex2.js');


let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < entradas.length; i++) {
    let numero = gets();

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        } 
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
        
        

}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Maior número ímpar: ${menorNumeroImpar}`);

