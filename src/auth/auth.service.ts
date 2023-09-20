import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';


@Injectable()
export class AuthService {
   constructor(
    @InjectRepository(UserEntity)  private userRepository:Repository<UserEntity>,
    private userService :UsersService,
    private jwtService:JwtService,
    ){}
    
   async signIn(email:string,pass:string):Promise<any>{
    const user= await this.userRepository.findOne({where:{email}});
    if(!user){
      throw new HttpException("User with this email Not found",HttpStatus.NOT_FOUND)
    }

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
    const {email}=createUserDto;
    const userCheck = await this.userRepository.findOne({where:{email}});
    if(userCheck){
      throw new HttpException("User with this email already exist",HttpStatus.NOT_FOUND);
    }
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
}
