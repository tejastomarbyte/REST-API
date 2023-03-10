import {Document} from 'mongoose';
export interface IEmployee extends Document{
    readonly id:number;
    readonly name:string;
    readonly email:string;
    readonly phone:string;
    readonly hireDate:'date';
    readonly position:string;


}