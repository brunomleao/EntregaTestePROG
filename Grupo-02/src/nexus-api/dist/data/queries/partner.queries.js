"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partnerQueries = void 0;
const client_1 = require("@prisma/client");
const uuid = require("uuid");
exports.partnerQueries = {
    findAll: client_1.Prisma.sql `
    SELECT * FROM "Partner"
    WHERE "isActive" = true;
  `,
    create: (partnerDto) => client_1.Prisma.sql `
  INSERT INTO "Partner" ("id", "partnerName", "sector", "contactEmail", "contactPhone","branch", "representativeJob", "isActive", "responsibleName", "password", "updatedAt")
  VALUES (
    ${uuid.v4()}, 
    ${partnerDto.partnerName}, 
    ${partnerDto.sector}, 
    ${partnerDto.contactEmail}, 
    ${partnerDto.contactPhone}, 
    ${partnerDto.branch}, 
    ${partnerDto.representativeJob},
    ${true},
    ${partnerDto.responsibleName},
    ${partnerDto.password},
    ${new Date()}
  )
  RETURNING *;
`,
    update: (partnerDto, id) => client_1.Prisma.sql `
  UPDATE "Partner"
  SET 
    "partnerName" = ${partnerDto.partnerName},
    "sector" = ${partnerDto.sector},
    "contactEmail" = ${partnerDto.contactEmail},
    "contactPhone" = ${partnerDto.contactPhone},
    "rateForProject" = ${partnerDto.rateForProject},
    "branch" = ${partnerDto.branch},
    "representativeJob" = ${partnerDto.representativeJob},
    "responsibleName" = ${partnerDto.responsibleName}
  WHERE "id" = ${id}
  RETURNING *;
`,
    delete: (id) => client_1.Prisma.sql `
    UPDATE "Partner"
    SET
      "isActive" = false
    WHERE id = ${id}
    RETURNING *;
    `,
};
//# sourceMappingURL=partner.queries.js.map