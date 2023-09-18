"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleQueries = void 0;
const client_1 = require("@prisma/client");
const uuid = require("uuid");
exports.moduleQueries = {
    create: (moduleDto) => client_1.Prisma.sql `
        INSERT INTO "Module" ("id", "courseCode", "moduleName", "beginData", "isActive", "createdAt", "updatedAt", "status")
        VALUES (
            ${uuid.v4()},
            ${moduleDto.courseCode},
            ${moduleDto.moduleName},
            ${new Date()},
            ${moduleDto.isActive},
            ${new Date()},
            ${new Date()},
            ${moduleDto.status}
        )
        RETURNING *;
    `,
};
//# sourceMappingURL=module.queries.js.map