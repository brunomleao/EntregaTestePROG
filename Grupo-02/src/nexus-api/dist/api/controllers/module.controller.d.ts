import { ModuleDto } from 'src/business/dtos/module.dto';
import { InitiativeService } from 'src/data/services/initiative.service';
import { ModuleService } from 'src/data/services/module.service';
export declare class ModuleController {
    private readonly initiativesServices;
    private readonly moduleService;
    constructor(initiativesServices: InitiativeService, moduleService: ModuleService);
    findAllModules(): Promise<void>;
    createModule(moduleDto: ModuleDto): Promise<import("../../business/entities/module.entity").ModuleEntity>;
    updateModuleInformations(): Promise<void>;
    findAllModulesAndinitiativesAssociated(): Promise<any[]>;
}
