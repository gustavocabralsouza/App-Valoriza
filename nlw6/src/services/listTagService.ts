import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import {classToPlain} from 'class-transformer'


class LisTagService{

    async execute(){
      const tagsRepositories = getCustomRepository(TagsRepositories)
      
      const tags = await tagsRepositories.find()

      return tags
    }
}

export {LisTagService}