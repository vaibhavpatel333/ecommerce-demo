import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createCartAPI1692192860428 implements MigrationInterface {

    private table = new Table({
        name: 'cart',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true, // Auto-increment
            },
            {
                name: 'createdAt',
                type: 'timestamptz',
                isNullable: false,
                default: 'CURRENT_TIMESTAMP',
            },
            {
                name: 'updatedAt',
                type: 'timestamptz',
                isNullable: false,
                default: 'CURRENT_TIMESTAMP',
            },
            {
                name: 'addedAt',
                type: 'timestamptz',
                isNullable: false,
            },
            {
                name: 'quantity',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'userId',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'productId',
                type: 'integer',
                isNullable: false,
                isUnique: true
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey(
            'cart',
            new TableForeignKey({
              columnNames: ['userId'],
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
            }),
          );
          await queryRunner.createForeignKey(
            'cart',
            new TableForeignKey({
              columnNames: ['productId'],
              referencedTableName: 'product',
              referencedColumnNames: ['id'],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
