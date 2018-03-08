import { prop, Typegoose, ModelType, InstanceType, arrayProp, staticMethod } from 'typegoose';
import * as mongoose from 'mongoose';
import { Tutorial } from './tutorial';

export class Author extends Typegoose {
    @prop({unique: true})
    id: Number;

    @prop()
    name: String;

    @arrayProp({ items: Tutorial })
    otherTutorials?: Tutorial[];

    @staticMethod
    static findByName(this: ModelType<Author>, name: string) {
        return this.findOne({ name });
    }
}
