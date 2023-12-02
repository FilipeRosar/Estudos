function calcularImc(peso, altura){
    return peso / altura ** 2;
}

function classificarImc(imc){
    if(imc < 18.5){
        return'Você está abaixo do peso'
    } else if (imc >= 18.5 && imc < 25){
        return'Seu peso é normal'
    } else if (imc >= 25 && imc < 30){
        return'Você está acima do peso'
    } else if (imc >= 30 && imc < 40){
        return'Você está obeso'
    } else if (imc > 40){
        return'Você está com obesidade grave'
    }
}


(function(){
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc))

})();

