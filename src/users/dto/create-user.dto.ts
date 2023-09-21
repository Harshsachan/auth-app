import { Column } from "typeorm";
import { Role } from "../role.enum";
import { IsEmail,IsEnum,IsNotEmpty } from 'class-validator';

export class CreateUserDto{
@Column()
@IsEmail()
@IsNotEmpty()
email :string

@Column()
@IsNotEmpty()
password:string

@IsEnum(Role)
@Column()
roles: string=Role.Student;

}