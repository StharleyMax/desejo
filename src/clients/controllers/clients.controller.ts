import { Controller, Get } from '@nestjs/common';
import { ClientsResolver } from '../clients.resolver';
import { Clients } from '../interfaces/clients.interface';

@Controller('clients')
export class ClientsController {

  constructor(private clientsService:ClientsResolver ){}

  @Get()
  findAll(): Promise<Clients[]>{
    return this.clientsService.findAll();
  }
}
