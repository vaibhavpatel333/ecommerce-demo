import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseMigrations1649938237326 implements MigrationInterface {
    name = 'BaseMigrations1649938237326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE users (
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            "mobileNumber" VARCHAR(20), -- Adjust the size as needed
            CONSTRAINT uq_email UNIQUE (email)
          );`);
        await queryRunner.query(`INSERT INTO users (name, email, password, "mobileNumber")
          VALUES ('vaibhav', 'vaibhavp122@gmail.com', '$2b$10$5mnRX1RAyvFfbAh41qey2urldTeqBczTsSxEvClGA9ROUF803oXzW', '9898636356');`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
