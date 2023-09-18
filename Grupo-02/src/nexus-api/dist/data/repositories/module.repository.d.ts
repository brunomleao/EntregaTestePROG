import { ModuleDto } from "src/business/dtos/module.dto";
import { ModuleEntity } from "src/business/entities/module.entity";
import { IModuleRepository } from "src/business/repositories/module-impl.repository";
import { PrismaService } from "../prisma.service";
export declare class ModuleRepository implements IModuleRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(moduleDto: ModuleDto): Promise<ModuleEntity[]>;
}
