import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DesireModule } from './desire/desire.module';

@Module({
  imports: [TypeOrmModule.forRoot(),
    UserModule,
    DesireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
