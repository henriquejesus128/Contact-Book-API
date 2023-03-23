import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigraion1679580441263 implements MigrationInterface {
    name = 'InitialMigraion1679580441263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`CREATE TABLE "users_contacts_contacts" ("usersId" uuid NOT NULL, "contactsId" uuid NOT NULL, CONSTRAINT "PK_fe80f0ed143efd1b3e8312bcfb8" PRIMARY KEY ("usersId", "contactsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b34d494a7b38bdda618f4d28a4" ON "users_contacts_contacts" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_585352aad09df6e9e86fd1b116" ON "users_contacts_contacts" ("contactsId") `);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" ADD CONSTRAINT "FK_b34d494a7b38bdda618f4d28a4d" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" ADD CONSTRAINT "FK_585352aad09df6e9e86fd1b116b" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" DROP CONSTRAINT "FK_585352aad09df6e9e86fd1b116b"`);
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" DROP CONSTRAINT "FK_b34d494a7b38bdda618f4d28a4d"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "userId" uuid`);
        await queryRunner.query(`DROP INDEX "public"."IDX_585352aad09df6e9e86fd1b116"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b34d494a7b38bdda618f4d28a4"`);
        await queryRunner.query(`DROP TABLE "users_contacts_contacts"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
