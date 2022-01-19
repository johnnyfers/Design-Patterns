import { ShoppingParkingLotCalculator } from "../src/behavior/strategy/ShoppingParkingLotCalculator"
import { BeachParkingLotCalculator } from "../src/behavior/strategy/BeachParkingLotCalculator"
import { ParkingLot } from "../src/behavior/strategy/ParkingLot"

test('should be able to calculate parkinglot ticket price in the beach', () => {
    const payload = {
        plate: '111AAA',
        checkInDate: new Date('2022-10-10T10:00:00')
    }
    const parkingLot = new ParkingLot(new BeachParkingLotCalculator())
    parkingLot.checkIn(payload.plate, payload.checkInDate)
    const ticketPrice = parkingLot.checkout(payload.plate, new Date('2022-10-10T13:00:00'))
    expect(ticketPrice).toBe(15)
})


test('should be able to calculate the parkinglot ticket price in the shopping(12h - 14h)', () => {
    const payload = {
        plate: '111AAA',
        checkInDate: new Date('2022-10-10T10:00:00')
    }
    const parkingLot = new ParkingLot(new ShoppingParkingLotCalculator())
    parkingLot.checkIn(payload.plate, payload.checkInDate)
    const ticketPrice = parkingLot.checkout(payload.plate, new Date('2022-10-10T13:00:00'))
    expect(ticketPrice).toBe(9)
})


test('should be able to not churging for the parkinglot ticket price in the shopping at the lunch time(12h - 14h)', () => {
    const payload = {
        plate: '111AAA',
        checkInDate: new Date('2022-10-10T12:00:00')
    }
    const parkingLot = new ParkingLot(new ShoppingParkingLotCalculator())
    parkingLot.checkIn(payload.plate, payload.checkInDate)
    const ticketPrice = parkingLot.checkout(payload.plate, new Date('2022-10-10T13:00:00'))
    expect(ticketPrice).toBe(0)
})
