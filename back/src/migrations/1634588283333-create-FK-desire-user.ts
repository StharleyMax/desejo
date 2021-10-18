import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class createFKDesireUser1634588283333 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'tb_desire',
      new TableForeignKey({
        name: 'User',
        referencedTableName: 'tb_user',
        referencedColumnNames: ['idUser'],
        columnNames: ['idUser'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tb_desire', 'User');
  }
}
