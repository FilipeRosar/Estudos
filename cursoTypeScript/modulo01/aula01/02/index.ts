const num: number = 15;

// if(num > 15){
//     console.log('Num maior que quinze')
// } else if(num === 15){
//     console.log('Num é igual á 15')
// }
//  else {
//     console.log('Num menor que quinze')
// }

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Você é um estudante',
    viewer: 'Você pode visualizar'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
