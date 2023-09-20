import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Role } from "../role.enum";
import { IsEmail,IsEnum,IsNotEmpty } from 'class-validator';

@Entity()
export class UserEntity{
    @ObjectIdColumn()
    id: number;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email :string
    
    @Column()
    @IsNotEmpty()
    password:string

    @IsEnum(Role)
    @Column()
    @IsNotEmpty()
    roles: string=Role.Student;
}