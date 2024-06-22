import { Router } from 'express';
import UserController from './user-controller';

const userRouter = Router();
const userController = new UserController();

userRouter.put('/settings', userController.updateSettings);

export default userRouter;
