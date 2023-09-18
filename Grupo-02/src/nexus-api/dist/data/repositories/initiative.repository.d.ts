import { InitiativeEntity } from 'src/business/entities/initiative.entity';
import { PrismaService } from '../prisma.service';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
import { IInitiativeRepository } from 'src/business/repositories/initiative-impl.repository';
export declare class InitiativeRepository implements IInitiativeRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(initiativeDto: InitiativeDto): Promise<InitiativeEntity>;
    findAll(): Promise<InitiativeEntity[]>;
}
