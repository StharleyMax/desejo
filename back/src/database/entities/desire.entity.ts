import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_desire')
export class Desire {
  @PrimaryGeneratedColumn({ name: 'id_desire' })
  id: number;

  @Column({ name: 'title' })
  title: string;

  @Column({ name: 'desire' })
  desire: string;

  @Column({ name: 'idUser' })
  idUser: number;
}
