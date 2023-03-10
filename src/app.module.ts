import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { Mongoose } from 'mongoose';
import {MongooseModule} from '@nestjs/mongoose'
import { EmployeeSchema } from './schema/employee.schema';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:["local.env"]
    }),
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName:'nestdb'}),
    MongooseModule.forFeature([{name:'Employee',schema:EmployeeSchema}])
  ],
  controllers: [AppController, EmployeeController],
  providers: [AppService, EmployeeService],
})
export class AppModule {}
