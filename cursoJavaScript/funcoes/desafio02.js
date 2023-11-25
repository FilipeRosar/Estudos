function escreverNome(nome){
    return `Seu nome é ${nome}`;
}


function verificacaoDeIdade(idade, escreverNome){
    if (idade >= 18){
        console.log(`Você é maior de idade, ${escreverNome}`);
    } else{
        console.log(`Você é menor de idade, ${escreverNome}`);
    }
}

verificacaoDeIdade(17, escreverNome('Filipe'));