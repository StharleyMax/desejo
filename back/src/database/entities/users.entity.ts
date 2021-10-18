import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Desire } from './desire.entity';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn({ name: 'idUser' })
  id: number;

  @OneToMany(() => Desire, (desire) => desire.user)
  desire: Desire[];

  @Column()
  name: string;

  @Column()
  telephone: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;

  @Column()
  actived: boolean;

  @Column()
  user: string;

  @Column()
  password: string;
}
