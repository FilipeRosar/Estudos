formaDePagamento = 4;
precoProduto = 100;

function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}

function aplicarJuros(valor, porcentagem) {
    return valor + (valor * (porcentagem / 100));
}

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaDePagamento === 2) {
    console.log('Seu produto recebeu um desconto de 15% e agora ficou no valor de ' + aplicarDesconto(precoProduto, 15));
} else if (formaDePagamento === 3) {
    console.log('Você parcelou duas vezes de ' + (precoProduto / 2));
} else if (formaDePagamento === 4) {
    let valorComJuros = aplicarJuros(precoProduto, 10);
    let valorParcela = valorComJuros / 3;
    console.log('Você parcelou em 3 vezes de ' + valorParcela.toFixed(2) + ' com aumento de 10% de juros, o preço final ficou de ' + valorComJuros.toFixed(2));
}
