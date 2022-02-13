import { Order } from "./Order";

export abstract class OrderStatus {
    order: Order
    abstract value: string

    constructor(order: Order) {
        this.order = order
    }
    abstract open(): void
    abstract confirm (): void
    abstract cancel(): void
    abstract refund(): void
}