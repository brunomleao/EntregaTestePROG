"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiativeQueries = void 0;
const client_1 = require("@prisma/client");
const uuid = require("uuid");
exports.initiativeQueries = {
    findAllInitiativesAndModules: client_1.Prisma.sql `
    SELECT
    module.moduleName AS module_name,
    initiative.initiativeName AS initiative_name,
    module.status AS module_status
  FROM
    Module AS module
  INNER JOIN
    Initiative AS initiative ON module.id = initiative.module_id;
    `,
    create: (iniativeDto) => client_1.Prisma.sql `
    INSERT INTO "Initiative" (
      "id",
      "initiativeName",
      "scope",
      "partnerId",
      "moduleId",
      "courseId",
      "isActive",
      "updatedAt"
  )
  VALUES (
      ${uuid.v4()},
      ${iniativeDto.initiativeName},
      ${iniativeDto.scope},
      ${iniativeDto.partnerId},
      ${iniativeDto.moduleId},
      ${iniativeDto.courseId},
      ${true},
      ${new Date()}
  )
  RETURNING *; `,
    findAll: client_1.Prisma.sql `
  SELECT * FROM "Initiative"
  WHERE "isActive" = true 
  `
};
//# sourceMappingURL=initiative.queries.js.map