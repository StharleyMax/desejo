import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersInput } from './dto/create-users.input';
import { Users } from './users.entity';

@Injectable()
export class UsersService {

  constructor( @InjectRepository(Users) private usersRepository: Repository<Users>){}

  async findAllUsers(): Promise<Users[]>{
      const users = await this.usersRepository.find();
      return users;
  }


async createUsers(data: CreateUsersInput): Promise<Users>{
  const users = await this.usersRepository.create(data);
  const userSaved = await this.usersRepository.save(users);

  if(!userSaved){
    throw new InternalServerErrorException('Problema para criar um usuário');
  }else{
    return userSaved;
  }
 }
}
