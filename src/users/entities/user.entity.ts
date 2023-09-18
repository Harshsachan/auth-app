import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{
    @ObjectIdColumn()
    id: number;

    @Column()
    email :string
    
    @Column()
    password:string
}