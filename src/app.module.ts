import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from './bookings/bookings.module';
// import { dataSourceOptions } from 'db/data-source';
import { VehiclesModule } from './vehicles/vehicles.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username: 'postgres',
    password: 'purushothama',
    database: 'bookings',
    entities: ['dist/**/*.entity.js'],
    synchronize:true,
    logging:true
    
}), BookingsModule, VehiclesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
