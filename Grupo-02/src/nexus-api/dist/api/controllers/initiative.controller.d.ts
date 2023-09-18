import { InitiativeDto } from "src/business/dtos/initiative.dto";
import { InitiativeEntity } from "src/business/entities/initiative.entity";
import { InitiativeService } from "src/data/services/initiative.service";
export declare class InitiativeController {
    private readonly initiativeService;
    constructor(initiativeService: InitiativeService);
    findAllInitiatives(): Promise<InitiativeEntity[]>;
    createInitiative(initiativeDto: InitiativeDto): Promise<InitiativeEntity>;
}
