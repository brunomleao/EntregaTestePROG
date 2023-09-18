import { Sql } from "@prisma/client/runtime/library";
import { AnalystDto } from "src/business/dtos/analyst.dto";
export declare const analystQueries: {
    findAll: any;
    create: (analystDto: AnalystDto) => Sql;
};
