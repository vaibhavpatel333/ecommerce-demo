import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProductTable1692082062647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'author',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'integer',
          },
          {
            name: 'beforePrice',
            type: 'integer',
          },
          {
            name: 'imageUrl',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'released',
            type: 'date',
          },
          {
            name: 'review',
            type: 'integer',
          },
          {
            name: 'shippingCharge',
            type: 'integer',
          },
          {
            name: 'isAvailable',
            type: 'boolean',
          },
        ],
      }),
    );
    await queryRunner.query(`INSERT INTO product (title, "imageUrl", author, price, "beforePrice", description, released, "shippingCharge", "isAvailable", review)
    VALUES 
        ('It Ends with Us', 'https://www.bookswagon.com/productimages/images200/368/9781501110368.jpg', 'Colleen Hoover', 274, 499, 'From the #1 New York Times bestselling author of It Starts with Us and All Your Perfects...', '2016-08-01T18:30:00.000Z', 39, true, 5),
        ('It Starts with Us', 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/179/9781398518179.jpg', 'Colleen Hoover', 412, 699, 'Before It Ends with Us, it started with Atlas...', '2022-10-17T18:30:00.000Z', 39, true, 5),
        ('Harry Potter and the Chamber of Secrets', 'https://www.bookswagon.com/productimages/images200/669/9781408855669.jpg', 'J. K. Rowling', 384, 499, 'Before It Ends with Us, it started with Atlas...', '2003-02-17T18:30:00.000Z', 39, true, 4),
        ('The Illustrated Stories Of Tenali Raman: Classic Tales From India', 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/847/9789389567847.jpg', 'Wonder House Books', 233, 499, 'The enriching stories of the Vikatakavi, Tenali Raman...', '1998-02-22T18:30:00.000Z', 39, true, 4),
        ('Learning How to Fly', 'https://www.bookswagon.com/productimages/images200/153/9788129142153.jpg', 'Learning How to Fly', 200, 350, 'Dr A.P.J. Abdul Kalam had a great belief in the power of the youth...', '1998-02-22T18:30:00.000Z', 39, true, 4),
        ('Forest of Enchantments', 'https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/577/9789353573577.jpg', 'Chitra Banerjee Divakaruni', 500, 560, 'The Ramayana, one of the world''s greatest epics, is also a tragic love story...', '1998-02-22T18:30:00.000Z', 39, true, 4);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
