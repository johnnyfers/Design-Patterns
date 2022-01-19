import { IParkingLotTickerCalculator } from "./IParkingLotTickerCalculator"

export class ShoppingParkingLotCalculator implements IParkingLotTickerCalculator {
    calculate(checkInDate: Date, checkOutDate: Date): number {
        if (checkInDate.getHours() >= 12 && checkOutDate.getHours() <= 14) return 0
        const periodParked = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60)
        const parkingPricePerHour = 3
        return periodParked * parkingPricePerHour
    }
}