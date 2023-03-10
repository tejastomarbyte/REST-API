import { Controller,Post,Put,Res,Param,HttpStatus,Delete,Get,Body } from '@nestjs/common';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Post()
    async createEmployee(@Res() response,@Body() createEmployeeDto:CreateEmployeeDto){
        try{

            const newEmployee=await this.employeeService.createEmployee(createEmployeeDto)
            return response.status(HttpStatus.CREATED).json({
                message:'Student has been created successfully',
                newEmployee
            })
        }
        catch(err){
            console.log(err)
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode:400,
                message:"Employee not created",
                error:'Bad request'
            });
        }
    }

    @Get()
    async getEmployees(@Res() response){
        try{
            const employeeData=await this.employeeService.getAllEmployee()
            return response.status(HttpStatus.OK).json({
                message:"All students data found successfully",
                employeeData
            })
        }
        catch(err){
            return response.status(err.status).json(err.response)
        }
    }

    @Put('/:id')
    async updateStudent(@Res() response,@Param('id') employeeId: string,
    @Body() updateEmployeeDto:UpdateEmployeeDto){
        try{
            const existingEmployee=await this.employeeService.updateEmployee(employeeId,updateEmployeeDto)
            return response.status(HttpStatus.OK).json({
                message:'Employee has been successfully updated',
                existingEmployee
            })
        }
        catch(err){
                return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteStudent(@Res() response,@Param('id') employeeId:string){
        try{
            const deletedStudent=await this.employeeService.deleteEmployee(employeeId)
            return response.status(HttpStatus.OK).json({
                message:"Employee deleted successfully",
                deletedStudent
            })
        }
        catch(err){
            return response.status(err.status).json(err.response);
        }
    }


}
