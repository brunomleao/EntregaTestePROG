import { Sql } from "@prisma/client/runtime/library";
import { ModuleDto } from "src/business/dtos/module.dto";
export declare const moduleQueries: {
    create: (moduleDto: ModuleDto) => Sql;
};
