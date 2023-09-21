import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/constants/auth.guard';
import { Roles } from 'src/constants/role.decorator';
import { RolesGuard } from 'src/constants/roles.guard';
import { Role } from 'src/users/role.enum';
import { EventDto } from './dto/event.dto';
import { EventEntity } from './entities/event.entity';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.Admin)
  @Post('post')
  async postEvent(@Body() eventDto:EventDto):Promise<string>{
    return this.eventsService.postEvent(eventDto);
  }

  @UseGuards(AuthGuard)
  @Get('get')
  async getEvent():Promise<EventEntity[] | string>{
    return this.eventsService.getEvent();
  }
}
