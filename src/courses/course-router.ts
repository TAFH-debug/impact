import { Router } from 'express';
import CourseController from './course-controller';
import CourseService from './course-service';

const courseRouter = Router();

const courseService = new CourseService();
const courseController = new CourseController(courseService);

courseRouter.post('/create', courseController.createCourse);
courseRouter.get('/', courseController.getCourses);

export default courseRouter;
