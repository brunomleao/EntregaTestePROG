import { AnalystDto } from "src/business/dtos/analyst.dto";
import { AnalystEntity } from "src/business/entities/analyst.entity";
import { AnalystService } from "src/data/services/analyst.service";
export declare class AnalystController {
    private readonly analystService;
    constructor(analystService: AnalystService);
    findAllAnalysts(): Promise<AnalystEntity[]>;
    createAnalysts(analystDto: AnalystDto): Promise<AnalystEntity>;
}
