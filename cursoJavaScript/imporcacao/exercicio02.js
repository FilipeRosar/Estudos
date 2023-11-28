const {gets , print} =  require('./funcoes-auxiliares-ex2.js');

let numeros = [5, 3, 4, 1, 10, 8];
let maiorNumeroPar = 0;
let maiorNumeroImpar = 0;

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero % 2 === 0 && numero > maiorNumeroPar) {
        maiorNumeroPar = numero;
    } else if (numero % 2 === 1 && numero > maiorNumeroImpar) {
        maiorNumeroImpar = numero;
    }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Maior número ímpar: ${maiorNumeroImpar}`);
