import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class Service1 {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    @Get('/init')
    init() : object {
        return this.appService.init();
    }
}
