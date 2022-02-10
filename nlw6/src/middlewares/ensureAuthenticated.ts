import {Request, Response, NextFunction} from 'express'


export function ensureAuthenticated(
    request: Request,
     response: Response,
      next: NextFunction
){

    //Receber o token
    const token = request.headers.authorization
   
    //validar se o token esta preenchido
    if(!token) {
        return response.status(401).end()
    }
    
    // Valiar se token é válido
    
    // Recuperar informacoes do usuario

    return next()


}