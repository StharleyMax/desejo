import { Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ClientsEntitys } from './entitys/clients.entity';
import { Clients } from './interfaces/clients.interface';

@Resolver()
export class ClientsResolver {

  constructor(@InjectRepository(ClientsEntitys)
              private readonly clientsRepository: Repository<ClientsEntitys>){}

  findAll(): Promise<Clients[]>{
    return this.clientsRepository.find();
  }

  async createDesejo(desejo: Clients):Promise<ClientsEntitys>{
    return await this.clientsRepository.save(desejo);
  }

  async updateDesejo(id:number, desejo: Clients): Promise<UpdateResult>{
      return await this.clientsRepository.update(id, desejo);
  }
}
