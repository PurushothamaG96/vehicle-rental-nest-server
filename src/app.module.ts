import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { dataSourceOptions } from 'db/data-source';


@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), BookingsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
