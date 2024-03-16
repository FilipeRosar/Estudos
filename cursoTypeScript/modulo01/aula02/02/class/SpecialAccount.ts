import { Account } from "./Account";

export class SpecialAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }
    deposit(amount: number): void {
        const soma = (amount + 10);
        console.log(`Você depositou ${amount}. Com o bônus, seu saldo atual é de ${soma}`)
    }
}