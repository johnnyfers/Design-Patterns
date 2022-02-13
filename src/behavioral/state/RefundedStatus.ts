import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";

export class RefundedStatus extends OrderStatus {
    value: string

    constructor(order: Order){
        super(order)
        this.value = 'refunded'
    }

    open(): void {
        throw new Error('order already refunded')
    }
    
    confirm(): void {
        throw new Error('order already refunded')
    }
    
    cancel(): void {
        throw new Error('order already refunded')
    }
    
    refund(): void {
        throw new Error('order already refunded')
    }
}