import { Router } from 'express';
import { adminMiddleware } from '../middlewares/admin-middleware';
import adminController from './admin-controller';

const adminRouter = Router();

adminRouter.use(adminMiddleware);

adminRouter.post('/user/role', adminController.changeUserRole);
adminRouter.get('/user/all', adminController.getAllUsers);

export default adminRouter;
