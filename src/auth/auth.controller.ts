import { Controller, Get, Post, Request, Patch, Param, Delete, Query, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { Public } from 'src/constants/public';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthGuard } from './auth.guard';
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

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    const {username  ,iat,exp,...result}=req.user
    return result;
  }

  
  @UseGuards(AuthGuard)
  @Get('item')
  findAll(){
    return "Nice";
  }

}
