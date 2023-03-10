import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
@Schema()
export class Employee{


    @Prop({unique:true,required:true})
    id:number;

    @Prop()
    name:string;

    @Prop()
    email:string;

    @Prop()
    phone:string;

    @Prop()
    hireDate:'date';

    @Prop()
    position:string;
}

export const EmployeeSchema=SchemaFactory.createForClass(Employee);