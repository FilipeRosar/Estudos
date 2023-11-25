formaDePagamento = 4;
precoProduto = 100;
function aplicarDesconto(valor,desconto){
        return (valor - (valor * desconto/100))
}
function aplicarJuros(valor, juros){
    (valor + (valor * juros/100));
}

if (formaDePagamento === 1) {
  
    console.log(aplicarDesconto(precoProduto,10));

} else if (formaDePagamento === 2 ) {

    console.log('Seu produto recebeu um desconto de 15% e agora ficou no valor de ' + (aplicarDesconto(precoProduto, 15)));

} else if (formaDePagamento === 3) {

    console.log('Você parcelou duas vezes de ' + (precoProduto/2));

} else if (formaDePagamento === 4) {

    console.log('Você parcelou em 3 de ' + ((precoProduto + (precoProduto * 0.1))/3) + ' com aumento de 10% de juros, o preço final ficou de ' + (aplicarJuros(precoProduto, 10).toFixed(2)));
}

