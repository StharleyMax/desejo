import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DesireRepository } from '../database/repository/desire.repository';
import { DesireController } from './desire.controller';
import { DesireService } from './desire.service';

@Module({
  imports: [TypeOrmModule.forFeature([DesireRepository])],
  providers: [DesireService],
  controllers: [DesireController],
  exports: [DesireService],
})
export class DesireModule {}
