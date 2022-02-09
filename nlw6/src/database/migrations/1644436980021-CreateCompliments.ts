import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";


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
                ],foreignKeys:[
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "usersActive",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "usersActive",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tagsActive",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )

        // await queryRunner.createForeignKey(
        //     "complimentsActive",
        //     new TableForeignKey({
        //         name: "FKUserSenderCompliments",
        //                 referencedTableName: "users",
        //                 referencedColumnNames: ["id"],
        //                 columnNames: ["user_sender"],
        //                 onDelete: "SET NULL",
        //                 onUpdate: "SET NULL"
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("complimentsActive")
    }

}
