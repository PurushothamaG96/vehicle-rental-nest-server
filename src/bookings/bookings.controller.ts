import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    const isAvailable = await this.bookingsService.findAvailableVehicles(createBookingDto.startDate, createBookingDto.endDate, createBookingDto.vehicleId)
    if(isAvailable.length){
      return {message: 'This Vehicle Booked In this Date Range, no more available'}
    }
    else{
      return 'Bookings done'
    }
  }

 
}
