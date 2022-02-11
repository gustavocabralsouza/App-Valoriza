import {Request, Response} from 'express'
import { LisTagService } from '../services/listTagService'

class ListTagsController{
    async handle(request: Request, response: Response){
        const listTagService = new LisTagService()

        const tags = await listTagService.execute()

        return response.json(tags)

    }
}

export {ListTagsController}