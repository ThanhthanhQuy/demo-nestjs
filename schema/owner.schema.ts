import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose"
import { Dog } from './dog.schema';

export type OwnerDocument = Owner & Document
@Schema()
export class Owner {
    @Prop({required : true})
    firstName : String;

    @Prop({required : true})
    lastName : String;

    @Prop()
    address : String

    @Prop()
    password : String

    @Prop({type : mongoose.Schema.Types.ObjectId, ref : 'Dog'})
    dog : Dog
}

export const OwnerSchema = SchemaFactory.createForClass(Owner)