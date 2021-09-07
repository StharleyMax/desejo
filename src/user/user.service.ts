import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserAllDto } from "./dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../database/repository/user.repository";

@Injectable()
export class UserService{


  constructor(
    @InjectRepository(UserRepository)
    private readonly user: Repository<UserRepository>
  ){}


    async userAll(){
     return this.user.find();
    }
}
