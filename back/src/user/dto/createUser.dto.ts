import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome Usuário',
    type: String,
    example: 'Joao, Maria',
  })
  name: string;

  @ApiProperty({
    description: 'Telefone Celular',
    type: String,
    example: '+55 00 00000-0000',
  })
  telephone: string;

  @ApiProperty({ description: 'Cidade', type: String, example: 'Brasilia' })
  city: string;

  @ApiProperty({ description: 'Estado', type: String, example: 'DF' })
  state: string;

  @ApiProperty({ description: 'CEP', type: String, example: '00000-000' })
  zipCode: string;

  @ApiProperty({ description: 'Actived', type: Boolean, example: true })
  actived: boolean;

  @ApiProperty({
    description: 'Usuário',
    type: String,
    example: 'usuario.usuario',
  })
  user: string;

  @ApiProperty({ description: 'Senha', type: String, example: '1@325$5' })
  password: string;
}
