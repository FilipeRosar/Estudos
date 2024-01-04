// First Class Functions
// Higher Order Functions

function falarMeuNome(){
    console.log('Meu nome é Filipe')
}
function falarMeuSobrenome(falarMeuNome){
    falarMeuNome()
    console.log('Rosa de Figueiredo')
}
falarMeuSobrenome(falarMeuNome)