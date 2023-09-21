import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventDto } from './dto/event.dto';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventsService {
    constructor(@InjectRepository(EventEntity) private readonly eventRepository:Repository<EventEntity>){}

    async postEvent(eventDto:EventDto):Promise<string>{
        try {
            const event = this.eventRepository.create(eventDto)
        await this.eventRepository.save(event);
            return "Event Created";
        } catch (error) {
            throw new HttpException(error?.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    async getEvent():Promise<EventEntity[]|string>{
        const event = await this.eventRepository.find();
        if(event.length>0)
        {
            return event;
        }
        else{
            return "No Event's ";
        }

    }
}
