import { AnalystDto } from 'src/business/dtos/analyst.dto';
import { AnalystEntity } from 'src/business/entities/analyst.entity';
import { IAnalystRepository } from 'src/business/repositories/analyst-impl.repository';
import { PrismaService } from '../prisma.service';
export declare class AnalystRepository implements IAnalystRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<AnalystEntity[]>;
    create(dto: AnalystDto): Promise<AnalystEntity>;
}
