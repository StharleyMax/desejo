import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'este campo n pode ser nulo' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'este campo n pode ser nulo' })
  email: string;

  @IsString()
  fone: string;

  @IsString()
  estado: string;

  @IsString()
  @IsNotEmpty({ message: 'este campo n pode ser nulo' })
  login: string;

  @IsString()
  @IsNotEmpty({ message: 'este campo n pode ser nulo' })
  senha: string;
}
