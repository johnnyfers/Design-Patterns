export class Account {
    balance: number
    
    constructor(){
        this.balance = 0
    }

    getBalance(): number {
        return this.balance
    }

    credit(amount: number): void {
        this.balance += amount
    }

    debit(amount: number): void {
        this.balance -= amount
    }
}