const {gets , print} =  require('./funcoes-auxiliares-ex1.js');

const media = gets();

if (media > 0 && media < 5){
    print('Você foi reprovado');
} else if (media >= 5 && media < 7){
    print('Você está de recuperação');
} else if (media >= 7 && media <= 10){
    print('Você foi aprovado');
} else{
    print('Valor invalido')
}


