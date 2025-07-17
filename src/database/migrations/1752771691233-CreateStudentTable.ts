import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStudentTable1752771691233 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "student",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "name",
            type: "varchar",
            length: "255",
            isNullable: false
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isUnique: true,
            isNullable: false
          },
          {
            name: "active",
            type: "boolean",
            default: true
          },
          {
            name: "deletedAt",
            type: "timestamp",
            isNullable: true
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
