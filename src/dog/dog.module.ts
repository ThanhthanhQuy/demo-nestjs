import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog, DogSchema } from '../../schema/dog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])], // obligate
  controllers: [DogController],
  providers: [DogService]
})
export class DogModule {}
