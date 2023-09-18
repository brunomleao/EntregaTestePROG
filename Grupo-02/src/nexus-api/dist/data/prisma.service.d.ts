import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Sql } from '@prisma/client/runtime/library';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    executeRawQuery(query: Sql | TemplateStringsArray): Promise<any>;
}
