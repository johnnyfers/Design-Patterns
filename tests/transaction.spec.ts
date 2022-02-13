// adapter
import { PagSeguroTransactionAdapter } from "../src/structural/adapter/PagSeguroTransactionAdapter"
import { PagSeguroTransaction } from "../src/structural/adapter/PagSeguroTransaction"
import { PayPalTransaction } from "../src/structural/adapter/PayPalTransaction"
import { PayPalTransactionAdapter } from "../src/structural/adapter/PayPalTransactionAdapter"

test('should be able to complete a transaction using PagSeguro', () => {
    const pagSeguroTransaction = new PagSeguroTransaction('a34sad-asdasa-232dsda', 1000, 2)
    const transaction = new PagSeguroTransactionAdapter(pagSeguroTransaction)
    expect(transaction.status).toBe('paid')
})

test('should be able to complete a transaction using PayPal', () => {
    const payPalTransaction = new PayPalTransaction('a34sad-111111-232dsda', 1000, 'B')
    const transaction = new PayPalTransactionAdapter(payPalTransaction)
    expect(transaction.status).toBe('paid')
})