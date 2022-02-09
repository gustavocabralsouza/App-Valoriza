import { getCustomRepository } from "typeorm"

import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'

import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateService{
    email : string,
    password: string
}

class AuthenticateUserService{

    async execute({email,password}: IAuthenticateService){
        const usersRepositories = getCustomRepository(UsersRepositories)

      //Verificar se o email existe
      const user = await usersRepositories.findOne({
          email
      })

      if (!user) {
        throw new Error("Email/Password incorrect");
        
      }
      
      //verificar se senha esta correta

      // 12345 / 4343jfjf-tr453323(comparar se a senha que o usuario colocou corresponde a senha hash-ecnriptgrafada)
      const passwordMatch = await compare(password, user.password)

      if(!passwordMatch){
        throw new Error("Email/Password incorrect");
      }
      //Se senha esta correta entao Gerar Token
      const token = sign({
          email: user.email
      }, 'fba0c363fb347d4859c5ea379ee46569', {
        subject: user.id,
        expiresIn: "1d"
      })

      return token

    }
}

export {AuthenticateUserService}