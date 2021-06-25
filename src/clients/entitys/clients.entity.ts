import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export class ClientsEntitys{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assunto: string;

  @Column()
  tipo: string;

  @Column()
  descricacao: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createAt: Date;

}
