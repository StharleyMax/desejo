import { ApiProperty } from "@nestjs/swagger";


export class DeleteUserDto {
  @ApiProperty({ description: 'Delete User', example: true })
  result: boolean;
}
