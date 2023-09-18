import { CourseEntity } from "../entities/course.entity";
export interface ICourseRepository {
    findAll(): Promise<CourseEntity[]>;
}
