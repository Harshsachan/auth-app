import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    UsersModule,
    JwtModule.register({
    global: true,
    //TODO: Change the secert key or transfer it in sep constants files.
    secret : "My_secert-World!right_now=To{}be_changed",
    signOptions:{ expiresIn:'1d'},
  }),],
  //imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
