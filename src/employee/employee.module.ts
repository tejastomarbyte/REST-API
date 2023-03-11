import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  hireDate: { type: Date, required: true },
  position: { type: String, required: true },
});

export interface Employee extends mongoose.Document {
  id: number;
  name: string;
  email: string;
  phone: string;
  hireDate: Date;
  position: string;
}