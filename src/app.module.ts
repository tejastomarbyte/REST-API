import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose'
import { EmployeeSchema } from './schema/employee.schema';
import { EmployeeController } from './employee/employee.controller';
import { TaskSchema } from './schema/Task.schema';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { EmployeeService } from './employee/employee.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName:'nestdb'}),
    MongooseModule.forFeature([{name:'Employee',schema:EmployeeSchema}]),
    MongooseModule.forFeature([{name:'Task',schema:TaskSchema}]),
   
  ],
  controllers: [AppController,EmployeeController, TasksController],
  providers: [AppService,EmployeeService, TasksService],
})
export class AppModule {}
