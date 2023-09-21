import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Column } from "typeorm";

export class AssignmentDto{

    @Column()
    @IsString()
    @IsNotEmpty({ message: 'Title cannot be empty' })
    title: string;
  
    @Column()
    @IsString()
    @IsNotEmpty({ message: 'Description cannot be empty' })
    description: string;

    @Column()
    @IsNotEmpty({ message: 'Deadline cannot be empty' })
    @IsNumber()
    deadline: number;
  
    @Column()
    @IsOptional()
    @IsString()
    fileUrl: string;
  
    @Column()
    @IsNotEmpty({ message: 'courseId cannot be empty' })
    @IsString()
    courseId: string;
}