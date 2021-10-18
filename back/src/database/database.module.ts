import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Desire } from './entities/desire.entity';
import { User } from './entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [User, Desire],
    }),
  ],
})
export class DatabaseModule {}
