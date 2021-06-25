import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//Necessário importar o entity para fazer id_users como chave estrangeira..
//import { Users } from '../../users/users.entity';

@Entity('clients')
export class ClientsEntitys{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assunto: string;

  @Column()
  tipo: string;

  @Column()
  descricao: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createAt: Date;

  /*
  @OneToOne(type => Users)
  @JoinColumn({name: 'id'})
  id_users: number;
  */

}
