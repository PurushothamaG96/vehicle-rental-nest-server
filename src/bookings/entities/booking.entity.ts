import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    startDate: Date

    @Column()
    endDate: Date
}
