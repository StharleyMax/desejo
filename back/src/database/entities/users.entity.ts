import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn({ name: 'idUser' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'telephone' })
  telephone: string;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'state' })
  state: string;

  @Column({ name: 'zipCode' })
  zipCode: string;

  @Column({ name: 'actived' })
  actived: boolean;

  @Column({ name: 'user' })
  user: string;

  @Column({ name: 'password' })
  password: string;
}
