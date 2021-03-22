import { Module, MiddlewareConsumer, NestModule, RequestMethod, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CatModule } from './cat/cat.module';
import { AppService } from './app.service';
import { MiddlewareService } from './middleware/first/middleware.service';
import { Cat } from './cat/cat';
import { CatSchema } from '../schema/cat.schema';
import {DogSchema} from '../schema/dog.schema'
import { AppController } from './app.controller';
import { UploadModule } from './upload/upload.module';
import { DogModule } from './dog/dog.module';
import { Dog } from '../schema/dog.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }, {name: Dog.name, schema : DogSchema}]),
    ConfigModule.forRoot(),
    CacheModule.register(),
    CatModule,
    UploadModule,
    DogModule,
  ],

  controllers: [AppController],
  providers: [AppService, MiddlewareService], // oblige to define in constructor controller
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // consumer.apply(MiddlewareService).forRoutes('/cats'); // c1: apply cho route theo ten
    consumer.apply(MiddlewareService).forRoutes({ path: '/cats', method: RequestMethod.GET }); // c1: apply cho route theo kieu define
    // consumer.apply(MiddlewareService).forRoutes(AppController) // c1: apply cho car 1 controller
  }

}
