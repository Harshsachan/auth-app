import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/constants/role.decorator';
import { Role } from 'src/users/role.enum';
import { AuthGuard } from '../constants/auth.guard';
import { RolesGuard } from '../constants/roles.guard';
import { AssignmentService } from './assignment.service';
import { AssignmentDto } from './dto/assignment.dto';
import { AssignmentEntity } from './entities/assignment.entity';

@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.Teacher,Role.Admin)
  @Post('post')
  async postAssignment(@Body() assignmentDto:AssignmentDto):Promise<string>{
    return this.assignmentService.postAssignment(assignmentDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.Teacher,Role.Student,Role.Admin)
  @Get('get')
  async getAssignment():Promise<AssignmentEntity[]|string>{
    return this.assignmentService.getAssignment();
  }
}
