import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    wheels:number;

    @Column()
    model: string;

    @Column()
    isAvailable: boolean;

    @Column()
    type: string;

}
