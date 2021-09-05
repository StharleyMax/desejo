import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {User} from './database/entitys/users.entity';

@Module({
  imports: [TypeOrmModule.forRoot({}),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
