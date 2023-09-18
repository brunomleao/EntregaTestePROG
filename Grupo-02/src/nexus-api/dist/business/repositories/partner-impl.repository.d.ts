import { PartnerDto } from "../dtos/partner.dto";
import { PartnerEntity } from "../entities/partner.entity";
export interface IPartnerRepository {
    findAll(): Promise<PartnerEntity[]>;
    create(partnerDto: PartnerDto): Promise<PartnerEntity>;
    update(partnerDto: PartnerDto, id: string): Promise<PartnerEntity>;
    delete(id: string): Promise<PartnerEntity>;
}
