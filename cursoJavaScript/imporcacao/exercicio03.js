const { gets, print } = require('./funcoes-auxiliares-ex3.js');

const salarioBruto = gets();
const salarioAdicionais = gets();

function aplicarDescontoEAdicionais(valor, desconto) {
    calculoDesconto = valor - (valor * desconto / 100);
    return calculoDesconto + salarioAdicionais;

}



if (salarioBruto >= 0.00 && salarioBruto <= 1100.00) {

    const resultadoDesconto = aplicarDescontoEAdicionais(salarioBruto, 5)
    print(resultadoDesconto);
} else if (salarioBruto >= 1100.01 && salarioBruto <= 2500.00) {

    const resultadoDesconto = aplicarDescontoEAdicionais(salarioBruto, 10)
    print(resultadoDesconto);
} else if (salarioBruto > 2500.00) {

    const resultadoDesconto = aplicarDescontoEAdicionais(salarioBruto, 15);
    print(resultadoDesconto)
}