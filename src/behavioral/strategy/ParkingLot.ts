import { IParkingLotTickerCalculator } from "./IParkingLotTickerCalculator";

export class ParkingLot {
    tickets: { plate: string, checkInDate: Date }[];
    parkingLotTickerCalculator: IParkingLotTickerCalculator

    constructor(parkingLotTickerCalculator: IParkingLotTickerCalculator) {
        this.parkingLotTickerCalculator = parkingLotTickerCalculator
        this.tickets = []
    }

    checkIn(plate: string, checkInDate: Date): void {
        this.tickets.push({ plate, checkInDate })
    }

    checkout(plate: string, checkOutDate: Date) {
        const ticket = this.tickets.find( ticket => ticket.plate === plate)
        if(!ticket) throw new Error('ticket not found')
        const ticketPrice = this.parkingLotTickerCalculator.calculate(ticket.checkInDate, checkOutDate)
        return ticketPrice
    }
}