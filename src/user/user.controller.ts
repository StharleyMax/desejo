import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserAllDto, CreateUserDto } from "./dto/user.dto";



@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

   @Get()
   async userAll(){
   return this.userService.userAll();
   }

   @Post()
   async createUser(@Body() createUserDto: CreateUserDto){
     const create = await this.userService.createUser(createUserDto);
     return {
       statusCode: HttpStatus.OK,
       message: 'Usuário criado com sucesso!',
       create: createUserDto
     };
   }
}
