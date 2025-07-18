import express from 'express'
import { getAllUsers, createUser} from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.get('/getAllUsers', getAllUsers);
userRouter.post('/createUser', createUser);

export default userRouter;