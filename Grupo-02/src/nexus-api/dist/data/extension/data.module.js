"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModule = void 0;
const common_1 = require("@nestjs/common");
const initiative_service_1 = require("../services/initiative.service");
const initiative_repository_1 = require("../repositories/initiative.repository");
const prisma_service_1 = require("../prisma.service");
const partner_service_1 = require("../services/partner.service");
const partner_repository_1 = require("../repositories/partner.repository");
const module_service_1 = require("../services/module.service");
const module_repository_1 = require("../repositories/module.repository");
const analyst_repository_1 = require("../repositories/analyst.repository");
const analyst_service_1 = require("../services/analyst.service");
const course_repository_1 = require("../repositories/course.repository");
const course_service_1 = require("../services/course.service");
let DataModule = exports.DataModule = class DataModule {
};
exports.DataModule = DataModule = __decorate([
    (0, common_1.Module)({
        providers: [
            initiative_repository_1.InitiativeRepository,
            initiative_service_1.InitiativeService,
            module_service_1.ModuleService,
            module_repository_1.ModuleRepository,
            partner_service_1.PartnerService,
            partner_repository_1.PartnerRepository,
            analyst_repository_1.AnalystRepository,
            analyst_service_1.AnalystService,
            course_repository_1.CourseRepository,
            course_service_1.CourseService,
            prisma_service_1.PrismaService
        ],
    })
], DataModule);
//# sourceMappingURL=data.module.js.map