import { Account } from "./Account";

export class CompanyAccont extends Account {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    getLoan = (): void => {
        console.log('Você pegou um emprestimo');
    }
    deposit = (): void => {
        console.log('A empresa depositou')
    }
}