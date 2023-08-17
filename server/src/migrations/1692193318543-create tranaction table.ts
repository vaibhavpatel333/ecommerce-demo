import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTranactionTable1692193318543 implements MigrationInterface {

    private table = new Table({
        name: 'transaction',
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
            },
            {
                name: 'totalAmount',
                type: 'integer',
                isNullable: false,
            },
            {
                name:"paymentMethod",
                type: 'VARCHAR(50)',
                isNullable: false,
            },
            {
                name:"address",
                type: 'VARCHAR',
                isNullable: false,
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey(
            'transaction',
            new TableForeignKey({
              columnNames: ['userId'],
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
            }),
          );
          await queryRunner.createForeignKey(
            'transaction',
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
