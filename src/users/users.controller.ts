import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Post()
    async createUser(@Body() createUserDto:CreateUserDto){
        return await this.usersService.createUser(createUserDto);
    }
    @Get('find')
    async findOne(@Query('email') email: string):Promise<UserEntity|undefined>{
        return this.usersService.findUser(email);
    }

}
