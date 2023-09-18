import { PrismaService } from '../prisma.service';
import { IPartnerRepository } from 'src/business/repositories/partner-impl.repository';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerEntity } from 'src/business/entities/partner.entity';
export declare class PartnerRepository implements IPartnerRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<PartnerEntity[]>;
    create(partnerDto: PartnerDto): Promise<PartnerEntity>;
    update(partnerDto: PartnerDto, id: string): Promise<PartnerEntity>;
    delete(id: string): Promise<PartnerEntity>;
}
