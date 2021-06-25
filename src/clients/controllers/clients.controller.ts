import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  //Atualizando por ID
  @Put(':id')
  updateDesejo(@Param('id')id:number, @Body() update: Clients):Promise<UpdateResult>{
      return this.clientsService.updateDesejo(id,update);
  }


  //Deletanto
  @Delete(':id')
  deleteDesejo(@Param('id') id:number){
    return this.clientsService.deleteDesejo(id);
  }
}
