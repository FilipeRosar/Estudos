nota1 = 8.4;
nota2 = 8.0;
nota3 = 7.0;

media = (nota1 + nota2 + nota3) / 3;

console.log('Sua média foi de ' + media.toFixed(1))

if (media < 5){
    console.log('Você foi reprovado!')
} else if (media >= 5.0 & media <= 7.0){
    console.log('Você está de recuperação!')
} else if (media > 7.0 & media <= 10.0){
    console.log('Você foi aprovado!')
} else if (media > 10.0 && media < 0){
    console.log('Nota invalida!')
}