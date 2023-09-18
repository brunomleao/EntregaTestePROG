import { AnalystDto } from 'src/business/dtos/analyst.dto';
import { AnalystEntity } from 'src/business/entities/analyst.entity';
import { IAnalystService } from 'src/business/services/analyst-impl.service';
import { AnalystRepository } from '../repositories/analyst.repository';
export declare class AnalystService implements IAnalystService {
    private readonly repository;
    constructor(repository: AnalystRepository);
    findAllAnalysts(): Promise<AnalystEntity[]>;
    createAnalyst(analystDto: AnalystDto): Promise<AnalystEntity>;
}
