import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DesireModule } from './desire/desire.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DesireModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
