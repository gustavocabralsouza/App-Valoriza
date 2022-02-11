import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController} from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiveComplimentsControllers } from './controllers/ListUserReceiveComplimentsController'
import { ListUserSendComplimentsControllers } from './controllers/ListUserSendCompilmetsController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsControllers()
const listUserSendComplimentsController = new ListUserSendComplimentsControllers()

router.post("/users", createUserController.handle)

router.post("/tags", 
    ensureAuthenticated,
    ensureAdmin,
    createTagController.handle
 )

router.post('/login', authenticateUserController.handle)

router.post('/compliments',ensureAuthenticated, createComplimentController.handle)

router.get('/users/compimets/send', 
    ensureAuthenticated, 
    listUserSendComplimentsController.handle
 )
 
router.get('/users/compimets/receive',
    ensureAuthenticated, 
    listUserReceiveComplimentsController.handle
 )

export { router }