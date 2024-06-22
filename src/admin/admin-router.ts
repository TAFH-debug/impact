import { Router } from 'express';
import { adminMiddleware } from '../middlewares/admin-middleware';
import adminController from './admin-controller';

const adminRouter = Router();

adminRouter.use(adminMiddleware);

adminRouter.post('/users/role', adminController.changeUserRole);

adminRouter.get('/users', adminController.getAllUsers);

export default adminRouter;
