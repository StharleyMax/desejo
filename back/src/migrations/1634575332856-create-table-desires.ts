import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableDesires1634575332856 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_desire',
        columns: [
          {
            name: 'id_desire',
            type: 'int',
            isPrimary: true,
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'desire',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'idUser',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'User',
            referencedTableName: 'tb_user',
            referencedColumnNames: ['idUser'],
            columnNames: ['idUser'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tb_desire', 'User');

    await queryRunner.dropTable('tb_desire');
  }
}
