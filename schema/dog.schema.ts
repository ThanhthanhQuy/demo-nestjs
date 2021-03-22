import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type DogDocument = Document & Dog
@Schema()
export class Dog {
  @Prop()
  name : String

  @Prop()
  owner : String
}

export const DogSchema = SchemaFactory.createForClass(Dog)