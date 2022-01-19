export interface IParkingLotTickerCalculator {
    calculate(checkInDate: Date, checkOutDate: Date): number
}