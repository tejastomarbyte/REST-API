import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
import { IEmployee } from 'src/interface/employee.interface';
@Injectable()
export class EmployeeService {
    
    
    constructor(@InjectModel('Employee') private employeeModel:Model<IEmployee> ){

    }

    async createEmployee(createEmployeeDto:CreateEmployeeDto):Promise<IEmployee>{
        const newEmployee= await new this.employeeModel(createEmployeeDto)
        return newEmployee.save();
    }

    async getAllEmployee(): Promise<IEmployee[]> {
    const employeeData = await this.employeeModel.find();
    if (!employeeData || employeeData.length == 0) {
        throw new NotFoundException('Employee data not found!');
    }
    return employeeData;
}

    async getEmployee(employeeId:string):Promise<IEmployee>{
        const existingEmployee= await this.employeeModel.findById(employeeId)
        if (!existingEmployee) {
         throw new NotFoundException(`Employee #${employeeId} not found`);
        }
        return existingEmployee;
    }

    
    async deleteEmployee(employeeId: string): Promise<IEmployee> {
        const deletedEmployee = await this.employeeModel.findByIdAndDelete(employeeId);
        if (!deletedEmployee) {
            throw new NotFoundException(`Employee #${employeeId} not found`);
        }
        return deletedEmployee;
    }

    
    async updateEmployee(employeeId: string, updateEmployeeDto: UpdateEmployeeDto): Promise<IEmployee> {
        const existingEmployee = await this.employeeModel.findByIdAndUpdate(employeeId, updateEmployeeDto, { new: true });
        if (!existingEmployee) {
            throw new NotFoundException(`Employee #${employeeId} not found`);
        }
        return existingEmployee;
    }
}


