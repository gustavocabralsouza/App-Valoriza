import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddUpdatedAt1644426667342 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "usersActive",
            new TableColumn({
                name: "updated_at",
                type: "timestamp",
                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('usersActive','updated_at')

    }

}
