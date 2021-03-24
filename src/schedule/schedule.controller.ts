import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Timeout } from '@nestjs/schedule';

@Controller('/schedule')
export class ScheduleController {
  constructor(private readonly scheduleService : ScheduleService) {
  }
  @Get('/3th')
  every3thSecond() : string {
    return this.scheduleService.Cron3th()
  }

  @Get('/every30s')
  every3Second() : string {
    return this.scheduleService.every30s()
  }

 @Get('/after3s')
  after3Second() : string {
    const a =  this.scheduleService.after3s()
   console.log('ok');
    return a
  }
}
