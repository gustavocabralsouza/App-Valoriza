import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn, 
    UpdateDateColumn
} from "typeorm";

import {v4 as uuid} from 'uuid'

@Entity('usersActive')
 class User {

    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    admin: boolean

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

   



    constructor() {
        //nesse if, vai ser para ver toda vez que tiver um novo usuario
        //o simbolo !this.id diz se o id é diferente o próprio id(se ele for undefined, vazio etc)
        if(!this.id){
            this.id = uuid()
        }
    }

 }

export { User }
