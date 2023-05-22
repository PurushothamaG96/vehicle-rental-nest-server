import { IsNotEmpty, IsDate, IsNumber } from "class-validator";

export class CreateBookingDto {
    @IsNotEmpty()
    name: number;

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsNumber()
    vehicleId: number;
}
