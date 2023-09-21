import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/constants/auth.guard';
import { Roles } from '../constants/role.decorator';
import { Role } from './role.enum';
import { RolesGuard } from '../constants/roles.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @UseGuards(AuthGuard,RolesGuard)
    @Roles(Role.Admin)
    @Get('findAll')
    async findAll():Promise<any[]>{
        return this.usersService.findAll();
    }

    @UseGuards(AuthGuard,RolesGuard)
    @Roles(Role.Teacher,Role.Admin)
    @Get('findUser')
    async findUser():Promise<any[]>{
        return ["User access only"];
        //return this.usersService.findAll();
    }
}
