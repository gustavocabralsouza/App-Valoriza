import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1644424425664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
           "usersActive",
           new TableColumn({
               name: "password",
               type: "varchar",
               isNullable: true,
               
           }),
        )
        await queryRunner.addColumn(
            "usersActive",
            new TableColumn({
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('usersActive','password')
        await queryRunner.dropColumn('usersActive','updated_at')
    }

}
