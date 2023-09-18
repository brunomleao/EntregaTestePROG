import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerEntity } from 'src/business/entities/partner.entity';
import { PartnerService } from 'src/data/services/partner.service';
export declare class PartnerController {
    private readonly partnerService;
    constructor(partnerService: PartnerService);
    getAllPartners(): Promise<PartnerEntity[]>;
    createPartner(partnerDto: PartnerDto): Promise<PartnerEntity>;
    updatePartner(partnerDto: PartnerDto, id: string): Promise<PartnerEntity>;
    deletePartner(id: string): Promise<PartnerEntity>;
    createFeedbackByPartner(): Promise<void>;
}
