import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class insertOptionAutoIncrementTableUserAndDesire1634586675296
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tb_desire', 'User');

    await queryRunner.changeColumn(
      'tb_user',
      'idUser',
      new TableColumn({
        name: 'idUser',
        type: 'int',
        generationStrategy: 'increment',
        isGenerated: true,
        isPrimary: true,
        isUnique: true,
      }),
    );

    await queryRunner.changeColumn(
      'tb_desire',
      'id_desire',
      new TableColumn({
        name: 'id_desire',
        type: 'int',
        generationStrategy: 'increment',
        isGenerated: true,
        isPrimary: true,
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'tb_desire',
      'id_desire',
      new TableColumn({
        name: 'id_desire',
        type: 'int',
        isPrimary: true,
        isUnique: true,
      }),
    );

    await queryRunner.changeColumn(
      'tb_user',
      'idUser',
      new TableColumn({
        name: 'idUser',
        type: 'int',
        isPrimary: true,
        isUnique: true,
      }),
    );
  }
}
