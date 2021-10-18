import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from '../database/entities/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async userAll(): Promise<User[]> {
    return this.userRepository.find({ where: { actived: true } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const createUser = this.userRepository.save({
      name: createUserDto.name,
      telephone: createUserDto.telephone,
      city: createUserDto.city,
      state: createUserDto.state,
      zipCode: createUserDto.zipCode,
      user: createUserDto.user,
      actived: true,
      password: createUserDto.password,
    });

    return createUser;
  }

  async findUserId(id: number): Promise<CreateUserDto> {
    const user = await this.userRepository.findOne({
      where: { id: id, actived: true },
    });

    if (!user) throw new NotFoundException('Usuário não encontrado!');

    return user;
  }

  async deleteUser(id: number): Promise<DeleteUserDto | undefined> {
    const user = await this.userRepository.findOne({
      where: { id: id, actived: true },
    });

    if (!user) throw new NotFoundException('Usuário já encontra-se desativado');

    user.actived = false;

    await this.userRepository.save(user);

    return { result: true };
  }
}
