import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Service1 } from "./service1";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly s1: Service1
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/init')
  init() : object {
    this.s1.getHello();
    return this.appService.init();
  }
}
