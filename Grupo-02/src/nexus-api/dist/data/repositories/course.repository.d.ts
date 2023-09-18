import { CourseDto } from "src/business/dtos/course.dto";
import { CourseEntity } from "src/business/entities/course.entity";
import { ICourseRepository } from "src/business/repositories/course-impl.repository";
import { PrismaService } from "../prisma.service";
export declare class CourseRepository implements ICourseRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(courseDto: CourseDto): Promise<CourseEntity>;
    findAll(): Promise<CourseEntity[]>;
}
