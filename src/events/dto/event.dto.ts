import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Column } from "typeorm";

export class EventDto{

    @Column()
    @IsString()
    @IsNotEmpty({ message: 'Title cannot be empty' })
    name: string;

    @Column()
    @IsString()
    @IsNotEmpty({ message: 'Title cannot be empty' })
    title: string;

    @Column()
    @IsString()
    @IsNotEmpty({ message: 'Date cannot be empty' })
    date: string;

    @Column()
    @IsString()
    @IsOptional()
    place: string;
}