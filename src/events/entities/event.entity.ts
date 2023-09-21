import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ObjectIdColumn } from 'typeorm';

@Entity()
export class EventEntity{
    @ObjectIdColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;
  
    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'text' })
    date: string;

    @Column({nullable:true})
    place: string | null;
}