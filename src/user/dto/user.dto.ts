import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

  @ApiProperty({description:'idUser', type: Number ,example:1})
  idUser: number;

  @ApiProperty({description:'Nome Usuário',type: String , example:'Joao, Maria'})
  nameUser: string;

  @ApiProperty({description:'Telefone Celular', type: String , example:'+55 00 00000-0000'})
  telefone: string;

  @ApiProperty({description:'Cidade', type: String , example:'Brasilia'})
  cidade: string;

  @ApiProperty({description:'Estado',type: String , example:'DF'})
  estado: string;

  @ApiProperty({description:'CEP', type: String , example:'00000-000'})
  cep: string;

  @ApiProperty({description:'Usuário',type: String ,example:'usuario.usuario'})
  usuario: string;

  @ApiProperty({description:'Senha', type: String ,example:'1@325$5'})
  senha: string;
}