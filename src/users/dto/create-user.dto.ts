import { Column } from "typeorm";

export class CreateUserDto{
@Column()
email :string

@Column()
password:string
}