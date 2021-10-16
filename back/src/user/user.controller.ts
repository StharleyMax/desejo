import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserAllDto } from "./dto/user.dto";
import { DeleteUserDto } from './dto/deleteUser.dto';
import { CreateUserDto } from "./dto/createUser.dto";



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async userAll() {
    return this.userService.userAll();
  }

  @Get(':id')
  async findUserId(@Param('id') id: number) {
    const user = await this.userService.findUserId(id);
    return {
      user,
      messege: 'Usuaário encontrado',
    }
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const create = await this.userService.createUser(createUserDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Usuário criado com sucesso!',
      create: createUserDto
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<DeleteUserDto> {
    return this.userService.deleteUser(id);
  }
}
