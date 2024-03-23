const login = (): void => {
    alert('Bem vindo!')
}

export const verification = (user: string, password: string): void =>{
    const correctUser = 'filiperosa0312@gmail.com';
    const correctPassword = '12345'
    if(user === correctUser && password === correctPassword){
        login()
    } else{
        alert('Email ou senha incorreta')
    }
}