import {Request, Response, NextFunction} from 'express'
import {verify} from 'jsonwebtoken'

interface IPayLoad{
    sub: string
}

export function ensureAuthenticated(
    request: Request,
     response: Response,
      next: NextFunction
){

    //Receber o token
    const authToken = request.headers.authorization
   
    //validar se o token esta preenchido
    if(!authToken) {
        return response.status(401).end()
    }

    //nessa linha o js vai fazer o seguinte:
    //vai separar a string do token pelo metodo "split"
    //esse split vai transformar minha string em um vetor de 2 posicoes, separadas pelo espaço em branco 
    //como a primeira posicao tem a palavra "bearer" e eu nao quero essa palavra no meu token
    //entao eu coloco [, variavelQueVaiReceberOvalorDaSegundaPosicaoDoVetor]

    const [, token] = authToken.split(" ")

    try{
        // Valiar se token é válido
        const {sub} = verify( token,"fba0c363fb347d4859c5ea379ee46569") as IPayLoad
        // Recuperar informacoes do usuario
        request.user_id = sub

        return next()
    }catch(err){
        return response.status(401).end
    }



}