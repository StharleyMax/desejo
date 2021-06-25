import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUsersInput } from './dto/create-users.input';
import { Users } from './users.entity';
import { UsersService } from './users.service';


//Resovler e o mesmo que o controller
@Resolver()
export class UsersResolver {

  constructor(private usersService: UsersService){}

  @Query(() => [Users])
  async users(): Promise<Users[]>{
    const users = await this.usersService.findAllUsers();
    return users;
  }

  @Mutation(() => Users)
  async createUsers( @Args('data') data: CreateUsersInput): Promise<Users>{
      const users = await this.usersService.createUsers(data);
      return users;
  }

}
