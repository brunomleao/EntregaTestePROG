import { ModuleDto } from 'src/business/dtos/module.dto';
import { ModuleEntity } from 'src/business/entities/module.entity';
import { IModuleService } from 'src/business/services/module-impl.service';
import { PrismaService } from '../prisma.service';
export declare class ModuleService implements IModuleService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createModule(moduleDto: ModuleDto): Promise<ModuleEntity>;
}
