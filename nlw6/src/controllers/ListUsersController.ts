import {Request, Response} from 'express'
import { ListUserService } from '../services/ListUserService'


class ListUsersController{
    async handle(request: Request, response: Response){
        const listUsersService = new ListUserService()

        const user = await listUsersService.execute()

        return response.json(user)


    }
}

export {ListUsersController}