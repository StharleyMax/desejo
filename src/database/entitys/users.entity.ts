import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_user')
export class User{

  @PrimaryGeneratedColumn()
  idUser: number

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
