import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
   constructor(private userService :UsersService,
    private jwtService:JwtService
    ){}
   async signIn(email:string,pass:string):Promise<any>{
    const user= await this.userService.findUser(email);
    if(user?.password !== pass){
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // return result;

    // Stating what all will be there in our JWT Token 
    const payload={ sub:user.email,username:user.email}
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
   }
}
