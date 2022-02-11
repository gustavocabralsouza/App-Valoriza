import { response } from "express"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


class ListUserService{
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories)
        const users = usersRepositories.find()

        return users
    }
}

export {ListUserService}