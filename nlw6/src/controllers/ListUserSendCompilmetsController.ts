import {Request, Response} from 'express'
import { ListUserReceiverComplimentsService } from '../services/ListUserReceiverComplimentsService'


class ListUserSendComplimentsControllers{

    async handle(request: Request, response: Response){
        const {user_id} = request

        const listUserSendComplimentsService = new ListUserReceiverComplimentsService()

        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}

export {ListUserSendComplimentsControllers}