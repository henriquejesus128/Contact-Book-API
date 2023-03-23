import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigraion1679581750382 implements MigrationInterface {
    name = 'InitialMigraion1679581750382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "photo" character varying, "phone" character varying(20) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "photo" character varying, "phone" character varying(20) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_contacts_contacts" ("usersId" uuid NOT NULL, "contactsId" uuid NOT NULL, CONSTRAINT "PK_fe80f0ed143efd1b3e8312bcfb8" PRIMARY KEY ("usersId", "contactsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b34d494a7b38bdda618f4d28a4" ON "users_contacts_contacts" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_585352aad09df6e9e86fd1b116" ON "users_contacts_contacts" ("contactsId") `);
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" ADD CONSTRAINT "FK_b34d494a7b38bdda618f4d28a4d" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" ADD CONSTRAINT "FK_585352aad09df6e9e86fd1b116b" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" DROP CONSTRAINT "FK_585352aad09df6e9e86fd1b116b"`);
        await queryRunner.query(`ALTER TABLE "users_contacts_contacts" DROP CONSTRAINT "FK_b34d494a7b38bdda618f4d28a4d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_585352aad09df6e9e86fd1b116"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b34d494a7b38bdda618f4d28a4"`);
        await queryRunner.query(`DROP TABLE "users_contacts_contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
