import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class CreateCompliments1644436980021 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"complimentsActive",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid",

                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                        
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
  
                    },
                    {
                        name: "message",
                        type: "varchar",
                        
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
