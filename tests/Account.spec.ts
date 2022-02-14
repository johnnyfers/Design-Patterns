// command
import { CreditCommand } from "../src/behavioral/command/CreditCommand"
import { Account } from "../src/behavioral/command/Account"
import { DebitCommand } from "../src/behavioral/command/DebitCommand"

test('should create a bank account', () => {
    const account = new Account()
    const balance = account.getBalance()
    expect(balance).toBe(0)
})

test('should credit a bank account', () => {
    const account = new Account()
    account.credit(1000)
    const balance = account.getBalance()
    expect(balance).toBe(1000)
})

test('should debit a bank account', () => {
    const account = new Account()
    account.credit(1000)
    account.debit(500)
    const balance = account.getBalance()
    expect(balance).toBe(500)
})

test('should credit a bank account by a command', () => {
    const account = new Account()
    const creditCommand = new CreditCommand(account, 1000)
    creditCommand.execute()
    const balance = account.getBalance()
    expect(balance).toBe(1000)
})

test('should debit a bank account by a command', () => {
    const account = new Account()
    const creditCommand = new CreditCommand(account, 1000)
    const debitCommand = new DebitCommand(account, 500)
    creditCommand.execute()
    debitCommand.execute()
    const balance = account.getBalance()
    expect(balance).toBe(500)
})
