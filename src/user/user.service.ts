import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserAllDto } from "./dto/user.dto";
import { CreateUserDto } from "./dto/createUser.dto";
import { DeleteUserDto } from './dto/deleteUser.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../database/repository/user.repository";
import { User } from "../database/entitys/users.entity";

@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async userAll(): Promise<User[]> {
    return this.userRepository.find({ where: { actived: true } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto[]> {
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
    return null;
  }

  async findUserId(id: number): Promise<CreateUserDto> {
    const user = await this.userRepository.findOne({
      where: { id: id, actived: true }
    });

    if (!user) throw new NotFoundException('Usuário não encontrado!');

    return user;
  }

  async deleteUser(id: number): Promise<DeleteUserDto | undefined> {
    const user = await this.userRepository.findOne({ where: { id: id, actived: true } });

    if (!user) throw new NotFoundException('Usuário já encontra-se desativado');

    user.actived = false;

    await this.userRepository.save(user);

    return { result: true }
  }
}

