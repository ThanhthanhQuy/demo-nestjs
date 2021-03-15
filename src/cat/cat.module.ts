import { CacheModule, Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { catService } from './cat.service';
import { CatSchema, CatDocument, Cat } from '../../schema/cat.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    CacheModule.register()],
  controllers: [CatController],
  providers: [catService],
})
export class CatModule {
}
