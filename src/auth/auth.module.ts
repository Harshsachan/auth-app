import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[UsersModule,
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
