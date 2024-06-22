import { Router } from 'express';
import UserController from './user-controller';
import {authMiddleware} from "../middlewares/auth-middleware";

const userRouter = Router();
const userController = new UserController();

userRouter.put('/user/update', authMiddleware, userController.updateSettings);
userRouter.get("/user/:id", userController.getUserById);
userRouter.get("/user/mentors", userController.getMentors);
export default userRouter;
