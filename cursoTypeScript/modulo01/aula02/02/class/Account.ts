export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
    setName(name: string): void {
        this.name = name;
        console.log(`Nome alterado com sucesso!`)
    }
    getName(): string {
        return this.name;
    }
    getAccountNumber(): number {
        return this.accountNumber;
    }
    deposit(amount: number): void {
        if (this.validateStatus()) {
            this.balance += amount;
            console.log(`Você depositou ${amount}. Seu saldo atual é de ${this.balance}`)
        }
    }
    withdraw(amount: number): void {
        if (this.validateStatus() && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Você sacou ${amount}. Seu saldo atual é de ${this.balance}`);
        } else {
            console.log(`Saldo insuficiente para saque`);
        }
    }
    getBalance(): number {
        return this.balance;
    }
    setBalance(amount: number): void {
        this.balance = amount;
    }
    validateStatus(): boolean {
        if (this.status) {
            return this.status
        }
        throw new Error(`Conta inválida`)
    }
};