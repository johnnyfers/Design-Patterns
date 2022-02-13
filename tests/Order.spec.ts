// state
import { Order } from "../src/behavioral/state/Order"

test('should create an open status order', () => {
    const order = new Order()
    expect(order.status.value).toBe('open')
})

test('should create an order and change its status to confirmed', () => {
    const order = new Order()
    order.confirm()
    expect(order.status.value).toBe('confirmed')
})

test('should create an order and change its status to cancelled', () => {
    const order = new Order()
    order.cancel()
    expect(order.status.value).toBe('cancelled')
})

test('should return an error after trying to open an already cancelled order', () => {
    const order = new Order()
    order.cancel()
    expect(()=> order.open()).toThrowError('order already cancelled')
})

test('should create an order and change its status to refund after confirm it', () => {
    const order = new Order()
    order.confirm()
    order.refund()
    expect(order.status.value).toBe('refunded')
})