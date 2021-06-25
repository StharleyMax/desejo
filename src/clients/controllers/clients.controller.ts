import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { ClientsResolver } from '../clients.resolver';
import { Clients } from '../interfaces/clients.interface';

@Controller('clients')
export class ClientsController {

  constructor(private clientsService:ClientsResolver ){}

  @Get()
  findAll(): Promise<Clients[]>{
    return this.clientsService.findAll();
  }

  //Save Desejo do Cliente.
  @Post()
  createDesejo(@Body() post: Clients):Promise<Clients>{
    return this.clientsService.createDesejo(post);
  }

  @Put(':id')
  updateDesejo(@Param('id')id:number, @Body() update: Clients):Promise<UpdateResult>{
      return this.clientsService.updateDesejo(id,update);
  }
}
