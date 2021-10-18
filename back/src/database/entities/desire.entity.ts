import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './users.entity';

@Entity('tb_desire')
export class Desire {
  @PrimaryGeneratedColumn('increment', { name: 'id_desire' })
  id: number;

  @JoinColumn({ name: 'idUser' })
  @ManyToOne(() => User, (user) => user.desire)
  user: User;

  @Column()
  title: string;

  @Column()
  desire: string;
}
