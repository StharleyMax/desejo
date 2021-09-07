import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserAllDto } from "./dto/user.dto";



@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

   @Get()
   async userAll(){
  return this.userService.userAll();
   }
}
