import { Module } from '@nestjs/common';
import { ClientsController } from './controllers/clients.controller';
import { ClientsResolver } from './clients.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsEntitys } from './entitys/clients.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClientsEntitys])],
  controllers: [ClientsController],
  providers: [ClientsResolver]
})
export class ClientsModule {}
