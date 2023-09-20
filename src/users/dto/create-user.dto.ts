import { Column } from "typeorm";
import { Role } from "../role.enum";

export class CreateUserDto{
@Column()
email :string

@Column()
password:string

@Column()
role:Role;
}