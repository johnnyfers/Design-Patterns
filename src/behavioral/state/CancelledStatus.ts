import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";

export class CancelledStatus extends OrderStatus {
    value: string

    constructor(order: Order){
        super(order)
        this.value = 'cancelled'
    }

    open(): void {
        throw new Error('order already cancelled')
    }
    
    confirm(): void {
        throw new Error('order already cancelled')
    }
    
    cancel(): void {
        throw new Error('order already cancelled')
    }
    
    refund(): void {
        throw new Error('order already cancelled')
    }
}