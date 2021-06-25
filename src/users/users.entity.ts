import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity('users')
export class Users{

  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number

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
