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

  findAll() {
    return `This action returns all bookings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
