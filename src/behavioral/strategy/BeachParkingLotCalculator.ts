import { IParkingLotTickerCalculator } from "./IParkingLotTickerCalculator"

export class BeachParkingLotCalculator implements IParkingLotTickerCalculator {
    calculate(checkInDate: Date, checkOutDate: Date): number {
        const periodParked = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60)
        const parkingPricePerHour = 5
        return periodParked * parkingPricePerHour
    }
}