import { CourseDto } from "src/business/dtos/course.dto";
import { CourseEntity } from "src/business/entities/course.entity";
import { CourseService } from "src/data/services/course.service";
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    createCourse(courseDto: CourseDto): Promise<CourseEntity>;
    findAllCourses(): Promise<CourseEntity[]>;
}
