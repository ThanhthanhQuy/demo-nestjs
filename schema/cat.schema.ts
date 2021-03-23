import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import {Document} from "mongoose"
import {isString, isNotEmpty} from "class-validator";

export type CatDocument = Cat & Document
@Schema()
export class Cat {
    @Prop()
    name : String

    @Prop()
    type : String
}

export const CatSchema = SchemaFactory.createForClass(Cat)

