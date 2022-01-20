import { PayPalTransaction } from "./PayPalTransaction";
import { Transaction } from "./Transaction";

export class PayPalTransactionAdapter implements Transaction{
    trackNumber: string;
    amount: number;
    status: string;

    constructor(pagSeguroTransaction: PayPalTransaction) {
        this.trackNumber = pagSeguroTransaction.id
        this.amount = pagSeguroTransaction.amount
        this.status = this.convertStatus(pagSeguroTransaction.status)
    }

    convertStatus(status: string): string {
        switch (status) {
            case 'A':
                return 'waiting_payment'
            case 'B':
                return 'paid'
            case 'C':
                return 'cancelled'
            default:
                return ''
        }
    }
}