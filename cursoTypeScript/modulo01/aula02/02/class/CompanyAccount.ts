import { Account } from "./Account";

export class CompanyAccont extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    getLoan(amount: number): void {
        if (this.validateStatus()) {
            const soma = this.getBalance() + amount;
            console.log(`Você pegou ${soma} de emprestimo`);
        } else {
            console.log('Conta invalida');
        }
    }
    deposit(amount: number): void {
        this.setBalance(this.getBalance() + amount);
        console.log(`A empresa depositou ${amount}`)
    }
}