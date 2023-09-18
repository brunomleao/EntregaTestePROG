import { PrismaService } from '../prisma.service';
import { IInitiativeService } from 'src/business/services/initiative-impl.service';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
import { InitiativeEntity } from 'src/business/entities/initiative.entity';
import { InitiativeRepository } from '../repositories/initiative.repository';
export declare class InitiativeService implements IInitiativeService {
    private readonly prisma;
    private readonly repository;
    constructor(prisma: PrismaService, repository: InitiativeRepository);
    findAllinitiativesAndModulesAssociated(): Promise<any[]>;
    createInitiatives(initiativeDto: InitiativeDto): Promise<InitiativeEntity>;
    findAllInitiatives(): Promise<InitiativeEntity[]>;
}
