import { Injectable } from '@nestjs/common';
import { UpdateBookingDto } from './dto/update-booking.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, Between} from 'typeorm';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(@InjectRepository(Booking)
   private bookingRepository: Repository<Booking>){}
   
   async findAvailableVehicles(startDate: Date, endDate: Date, vehicleId: number): Promise<Booking[]> {
    const availableVehicles = await this.bookingRepository.find({
      where: {
        id: vehicleId,
        startDate: Between(startDate, endDate),
        endDate: Between(startDate, endDate),
      },
    });
    return availableVehicles;
  }
  
}
