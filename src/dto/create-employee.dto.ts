import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateEmployeeDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name:string;

    @IsNumber()
    @IsNotEmpty()
    readonly id:number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()

    readonly email:string;
      

}