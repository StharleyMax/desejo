import { ApiProperty } from '@nestjs/swagger';

export class CreateDesireDto {
  @ApiProperty({ description: 'idUser', type: Number, example: 1 })
  user: any;

  @ApiProperty({ description: 'title', type: String, example: 'Title Desire' })
  title: string;

  @ApiProperty({
    description: 'desire',
    type: String,
    example: 'Description Desire',
  })
  desire: string;
}
