import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity)private readonly userRepository: Repository<UserEntity>) {}

  async findAll():Promise<any[]>{
    try{
      const users =await this.userRepository.find();
      if(users.length >0)
      {
        return this.userRepository.find();
      }
      else{
        return ["No Users"];
      }
  }
  catch(error){
      throw new HttpException(error?.message,HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
}