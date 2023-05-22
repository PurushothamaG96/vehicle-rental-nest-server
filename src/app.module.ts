import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { dataSourceOptions } from 'db/data-source';
import { VehiclesModule } from './vehicles/vehicles.module';


@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), BookingsModule, VehiclesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
