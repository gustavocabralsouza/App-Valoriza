import {Request, Response, NextFunction} from 'express'


export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    //Verificar se o usuario é admin pelo middleware
    const admin = true

    if(admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized"
    })

}