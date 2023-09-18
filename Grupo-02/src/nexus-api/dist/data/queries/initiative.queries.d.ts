import { Sql } from '@prisma/client/runtime/library';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
export declare const initiativeQueries: {
    findAllInitiativesAndModules: any;
    create: (iniativeDto: InitiativeDto) => Sql;
    findAll: any;
};
export interface InitiativeEntity {
    readonly id: string;
    readonly initiativeName: string;
    readonly scope: string;
    readonly partnerId: string;
    readonly moduleId: string;
    readonly courseId: string;
    readonly isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
