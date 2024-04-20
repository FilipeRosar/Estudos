// import { resolve } from "path"

const conta = {
    email: 'filiperosa0312@gmail.com',
    password: '123456',
    name: 'Filipe Rosa',
    balance: 3000.00,
    id: '4'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})