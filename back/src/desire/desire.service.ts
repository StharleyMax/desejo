import { InjectRepository } from '@nestjs/typeorm';

import { Desire } from 'src/database/entities/desire.entity';
import { Repository } from 'typeorm';

import { CreateDesireDto } from './dto/createDesire.dto';

export class DesireService {
  constructor(
    @InjectRepository(Desire)
    private readonly desireRepository: Repository<Desire>,
  ) { }

  async findAll(): Promise<Desire[]> {
    return this.desireRepository.find({ relations: ['user'] });
  }

  async findById(id: number): Promise<Desire> {
    return this.desireRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async create(createDesireDto: CreateDesireDto): Promise<Desire> {
    const { desire, idUser, title } = createDesireDto;
    return this.desireRepository.save({
      desire,
      idUser,
      title,
    });
  }
}
