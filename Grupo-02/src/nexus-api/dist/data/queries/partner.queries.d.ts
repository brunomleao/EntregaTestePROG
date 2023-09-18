import { Sql } from '@prisma/client/runtime/library';
import { PartnerDto } from 'src/business/dtos/partner.dto';
export declare const partnerQueries: {
    findAll: any;
    create: (partnerDto: PartnerDto) => Sql;
    update: (partnerDto: PartnerDto, id: string) => Sql;
    delete: (id: string) => Sql;
};
