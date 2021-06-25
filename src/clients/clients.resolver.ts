import { Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsEntitys } from './entitys/clients.entity';
import { Clients } from './interfaces/clients.interface';

@Resolver()
export class ClientsResolver {

  constructor(@InjectRepository(ClientsEntitys)
              private readonly clientsRepository: Repository<ClientsEntitys>){}

  findAll(): Promise<Clients[]>{
    return this.clientsRepository.find();
  }
}
