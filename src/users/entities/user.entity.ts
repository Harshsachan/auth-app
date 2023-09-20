import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role.enum";

@Entity()
export class UserEntity{
    @ObjectIdColumn()
    id: number;

    @Column()
    email :string
    
    @Column()
    password:string

    @Column()
    roles:Role;
}