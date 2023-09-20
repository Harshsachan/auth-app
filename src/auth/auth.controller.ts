import { Controller, Get, Post, Request, Query, HttpCode, HttpStatus, UseGuards, Body } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import { AuthGuard } from '../constants/auth.guard';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async findOne(@Query('email') email: string,@Query('password') password: string):Promise<UserEntity|undefined>
    {
        return this.authService.signIn(email,password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signup')
    async createUser(@Body() createUserDto:CreateUserDto){
        return await this.authService.createUser(createUserDto);
    }

      @UseGuards(AuthGuard)
      @Get('profile')
      getProfile(@Request() req) {
        const {username,iat,exp,...result}=req.user
        return result;
      }

  
      @UseGuards(AuthGuard)
      @Get('item')
      findAll(){
        return "Nice Private access Authentication";
      }

}
