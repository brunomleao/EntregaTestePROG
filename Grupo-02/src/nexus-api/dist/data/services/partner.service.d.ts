import { IPartnerService } from 'src/business/services/partner-impl.service';
import { PartnerEntity } from 'src/business/entities/partner.entity';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerRepository } from '../repositories/partner.repository';
export declare class PartnerService implements IPartnerService {
    private readonly repository;
    constructor(repository: PartnerRepository);
    getAllPartners(): Promise<PartnerEntity[]>;
    createPartner(partnerDto: PartnerDto): Promise<PartnerEntity>;
    updatePartner(partnerDto: PartnerDto, id: string): Promise<PartnerEntity>;
    deletePartner(id: string): Promise<PartnerEntity>;
}
