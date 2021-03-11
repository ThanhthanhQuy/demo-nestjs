import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Service1} from "./service1";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Service1],
})
export class AppModule {}
