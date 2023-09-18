import { CourseEntity } from "src/business/entities/course.entity";
import { ICourseService } from "src/business/services/course-impl.service";
import { CourseRepository } from "../repositories/course.repository";
import { CourseDto } from "src/business/dtos/course.dto";
import { PrismaService } from "../prisma.service";
import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { ClassDto } from "src/business/dtos/class.dto";
export declare class CourseService implements ICourseService {
    private readonly repository;
    private readonly prisma;
    constructor(repository: CourseRepository, prisma: PrismaService);
    createCourse(courseDto: CourseDto): Promise<CourseEntity>;
    findAllCourses(): Promise<CourseEntity[]>;
    associateInitiativeToCourse(courseId: string, initiativeData: InitiativeDto, classData: ClassDto): Promise<CourseEntity>;
}
