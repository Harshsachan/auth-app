import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssignmentDto } from './dto/assignment.dto';
import { AssignmentEntity } from './entities/assignment.entity';

@Injectable()
export class AssignmentService {
constructor(@InjectRepository(AssignmentEntity) private assignmentRepository:Repository<AssignmentEntity>){}
    async postAssignment(assignmentDto:AssignmentDto):Promise<string>{
        try {
            const assign = this.assignmentRepository.create(assignmentDto);
            await this.assignmentRepository.save(assign);
            return "Assignment uploaded";
        } catch (error) {
            throw new HttpException(error?.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
       
    }

    async getAssignment(): Promise<AssignmentEntity[]|string>{
        const assignments= await this.assignmentRepository.find();
        if(assignments.length>0)
        {
                return assignments
        }
        else{
            return "No Assignments Found"
        }
            return this.assignmentRepository.find();
    }
}
