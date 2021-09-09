import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserAllDto, CreateUserDto } from "./dto/user.dto";



@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

   @Get()
   async userAll(){
   return this.userService.userAll();
   }

   @Get(':id')
   async findUserId(@Param('id') id: number){
       return this.userService.findUserId(id);
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
