const precoProduto = 1200;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  
    console.log('Seu produto recebeu um desconto de 10% e agora ficou no valor de ' + (precoProduto - (precoProduto * 0.1)));

} else if (formaDePagamento === 2 ) {

    console.log('Seu produto recebeu um desconto de 15% e agora ficou no valor de ' + (precoProduto - (precoProduto * 0.15)));

} else if (formaDePagamento === 3) {

    console.log('Você parcelou duas vezes de ' + (precoProduto/2));

} else if (formaDePagamento === 4) {

    console.log('Você parcelou em 3 de ' + ((precoProduto + (precoProduto * 0.1))/3) + ' com aumento de 10% de juros, o preço final ficou de ' + (precoProduto + (precoProduto * 0.1)));
}
