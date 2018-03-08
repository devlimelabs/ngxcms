import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';


// create a schema
export class Tutorial extends Typegoose {
    @prop({unique: true})
    id: Number;

    @prop()
    name: String;

    @prop()
    content: String;
}
