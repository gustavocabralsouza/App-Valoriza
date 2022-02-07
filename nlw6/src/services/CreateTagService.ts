import { getCustomRepository } from "typeorm"
import {TagsRepositories} from '../repositories/TagsRepositories'



class CreateTagService {

    async execute(name: String) {
        const tagsRepositories = getCustomRepository(TagsRepositories)
    }
}

export {CreateTagService}