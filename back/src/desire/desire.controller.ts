import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { DesireService } from './desire.service';
import { CreateDesireDto } from './dto/createDesire.dto';

@Controller('desire')
export class DesireController {
  constructor(private readonly desireService: DesireService) {}

  @Get()
  async findAll() {
    return this.desireService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number) {
    return this.desireService.findById(id);
  }

  @Post()
  async create(@Body() createDesireDto: CreateDesireDto) {
    return this.desireService.create(createDesireDto);
  }
}
