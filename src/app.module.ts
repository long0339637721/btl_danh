import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from 'dotenv';

import { UserModule } from './mudules/user/user.module';
import { LocationModule } from './mudules/location/location.module';
import { UserEntity } from './mudules/user/entities/user.entity';
import { LocationEntity } from './mudules/location/entities/location.entity';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'add_username',
    password: 'add_password',
    database: 'add_dbName',
    options: {
      encrypt: false,
    },
    synchronize: true,
    entities: [UserEntity, LocationEntity],
  }), UserModule, LocationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
