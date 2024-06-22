import { Router } from 'express';
import UserController from './user-controller';
import {authMiddleware} from "../middlewares/auth-middleware";

const userRouter = Router();
const userController = new UserController();

userRouter.put('/user/update', authMiddleware, userController.updateSettings);

export default userRouter;
