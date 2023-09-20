import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Roles } from './role.decorator';
import { Role } from './role.enum';
import { RolesGuard } from './roles.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get('findAll')
    async findAll():Promise<any[]>{
        return this.usersService.findAll();
    }
}
