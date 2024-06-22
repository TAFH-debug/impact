import { CreateCourseDto } from './dtos/CreateCourse.dto';
import CourseModel, { ICourse } from './models/Course';

class CourseService {
  async createCourse(createCourseDto: CreateCourseDto): Promise<ICourse> {
    const { name, photo, text, video, isPrivate, users } = createCourseDto;

    const newCourse = new CourseModel({
      name,
      photo,
      text,
      video,
      isPrivate,
      users
    });

    await newCourse.save();
    return newCourse;
  }

  async getCourses(): Promise<ICourse[]> {
    return CourseModel.find().populate('users', '-password').exec();
  }
}

export default CourseService;
