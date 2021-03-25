import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
  // @Cron('3 * * * * *', { // second 3th per minute
  //   name: 'Every s3',
  //   timeZone: 'Asia/Vientiane',
  // })
  Cron3th() : string {
    console.log('Run....');
    return 'OK'
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  every30s() : string {
    console.log('Run every 30s');
    return 'Ok'
  }
  // @Interval('5s', 5000) //every 5s
  after3s() : string {
    console.log('ok');
    return 'Ok'
  }
}
