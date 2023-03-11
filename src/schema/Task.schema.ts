import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose';
import { Employee } from './employee.schema';
@Schema()
export class Task{


    @Prop({unique:true,required:true})
    id:number;

    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    dueDate:Date;
    
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }])
    employeeId: Employee;

    
}

export const TaskSchema=SchemaFactory.createForClass(Task);