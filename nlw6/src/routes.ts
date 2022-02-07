import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController} from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { nameAuthorized } from './middlewares/nameAuthorized'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()


router.post("/users", createUserController.handle)

router.post("/tags", ensureAdmin, nameAuthorized,createTagController.handle)

export { router }