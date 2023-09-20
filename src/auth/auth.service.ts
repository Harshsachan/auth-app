import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';


@Injectable()
export class AuthService {
   constructor(
    @InjectRepository(UserEntity)  private userRepository:Repository<UserEntity>,
    private userService :UsersService,
    private jwtService:JwtService,
    ){}
    
   async signIn(email:string,pass:string):Promise<any>{
    const user= await this.userRepository.findOneOrFail({where:{email}});
    console.log(user);
    
    if(user?.password !== pass){
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // return result;

    // Stating what all will be there in our JWT Token 
    const payload={ sub:user.email,username:user.email,roles:user.roles}
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
   }

   async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
}
