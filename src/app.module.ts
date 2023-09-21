import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { AssignmentModule } from './assignment/assignment.module';
import { AssignmentEntity } from './assignment/entities/assignment.entity';
import { EventsModule } from './events/events.module';
import { EventEntity } from './events/entities/event.entity';
dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mongodb',
    url: process.env.MONGODB_URI,
    synchronize:false,
    useUnifiedTopology:true,
    entities:[UserEntity,AssignmentEntity,EventEntity]
  }),
  AuthModule,  
  UsersModule, AssignmentModule, EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
