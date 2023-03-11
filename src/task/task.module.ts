import * as mongoose from 'mongoose';
import { Employee } from '../employee/employee.module';

export const TaskSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  employeeId: { type: mongoose.Schema.Types.Number, ref: 'Employee', required: true },
});

export interface Task extends mongoose.Document {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  employeeId: Employee['id'];
}