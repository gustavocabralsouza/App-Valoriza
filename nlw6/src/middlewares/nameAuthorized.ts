import {Request, Response, NextFunction} from 'express'
import {CreateTagController} from '../controllers/CreateTagController'


export function nameAuthorized(request: Request, response: Response, next: NextFunction){
    const createTagController = new CreateTagController
    const {name} = request.body

    if(name == 'Teste Cabral')  return next()

    return response.status(401).json({
        Error : 'Usuario não é o Teste Cabral'
    })

}