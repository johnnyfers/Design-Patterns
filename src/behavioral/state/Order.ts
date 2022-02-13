import { OpenStatus } from "./OpenStatus"
import { OrderStatus } from "./OrderStatus"

export class Order {
    status: OrderStatus

    constructor(){
        this.status = new OpenStatus(this)
    }

    open(): void {
        this.status.open()
    }
    
    confirm(): void {
        this.status.confirm()
    }

    cancel(): void {
        this.status.cancel()
    }

    refund(): void {
        this.status.refund()
    }
}