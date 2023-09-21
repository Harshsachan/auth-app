import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ObjectIdColumn } from 'typeorm';
//import { Course } from './course.entity'; // Import your Course entity

@Entity()
export class AssignmentEntity {
    @ObjectIdColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;
  
    @Column({ type: 'text' })
    description: string;
  
    @Column({ type: 'int' })
    deadline: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    fileUrl: string | null;
  
    @Column({ type: 'text' })
    courseId: string;
}
