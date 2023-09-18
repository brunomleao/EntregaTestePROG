"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analystQueries = void 0;
const client_1 = require("@prisma/client");
const uuid = require("uuid");
exports.analystQueries = {
    findAll: client_1.Prisma.sql `
    SELECT * FROM "Analyst"
    WHERE "isActive" = true;
    `,
    create: (analystDto) => client_1.Prisma.sql `
    INSERT INTO "Analyst" (
        "id",
        "name",
        "password",
        "email",
        "role",
        "isActive",
        "updatedAt"
    )
    VALUES (
        ${uuid.v4()},
        ${analystDto.name},
        ${analystDto.password},
        ${analystDto.email},
        ${analystDto.role},
        ${true},
        ${new Date()}
    )
    RETURNING *;
    `,
};
//# sourceMappingURL=analyst.queries.js.map