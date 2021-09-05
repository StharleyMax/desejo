import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User{

  @PrimaryGeneratedColumn()
  idUser: number

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  usuario: string;

  @Column()
  senha: string;

}
