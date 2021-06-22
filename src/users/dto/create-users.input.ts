import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUsersInput{

  @IsString()
  @IsNotEmpty({message:' Este campo não pode estar vazio'})
  nome: string;

  @IsString()
  telefone: string;

  @IsString()
  cidade: string;

  @IsString()
  estado: string;

  @IsString()
  cep: string;

  @IsString()
  usuario: string;

  @IsString()
  senha: string;

}
