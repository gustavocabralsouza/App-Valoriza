import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentService{
    async execute({tag_id, user_receiver, user_sender, message}: IComplimentRequest){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UsersRepositories)

        //verificar se o usuario esta enviando para ele mesmo
        if(user_sender === user_receiver){
            throw new Error('Incorrect User Receiver!')
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver)

        if(!userReceiverExists){
            throw new Error('User Receiver does not exists!')
        }

        const compliments = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })
        
        await complimentsRepository.save(compliments)

        return compliments
    }
}

export {CreateComplimentService}