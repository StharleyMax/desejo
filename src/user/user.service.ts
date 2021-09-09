import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserAllDto, CreateUserDto } from "./dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../database/repository/user.repository";
import { User } from "../database/entitys/users.entity";

@Injectable()
export class UserService{


  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}


    async userAll():Promise<User[]>{
     return this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto):Promise<CreateUserDto[]>{
      const createUser = this.userRepository.save(createUserDto);
      return null;
    }

    async findUserId(id: number):Promise<CreateUserDto>{
        return  this.userRepository.findOne({
          idUser: id
        });
    }
}
