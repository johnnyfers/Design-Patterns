import { CancelledStatus } from "./CancelledStatus";
import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";
import { RefundedStatus } from "./RefundedStatus";

export class ConfirmedStatus extends OrderStatus {
    value: string

    constructor(order: Order){
        super(order)
        this.value = 'confirmed'
    }

    open(): void {
        throw new Error('order already confirmed')
    }
    
    confirm(): void {
        throw new Error('order already confirmed')
    }
    
    cancel(): void {
        this.order.status = new CancelledStatus(this.order)
    }

    refund(): void {
        this.order.status = new RefundedStatus(this.order)
    }
}