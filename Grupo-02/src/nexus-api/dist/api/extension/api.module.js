"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("src/data/prisma.service");
const partner_service_1 = require("src/data/services/partner.service");
const partner_repository_1 = require("src/data/repositories/partner.repository");
const partner_controller_1 = require("../controllers/partner.controller");
const login_controller_1 = require("../controllers/login.controller");
const login_service_1 = require("src/data/services/login.service");
const module_controller_1 = require("../controllers/module.controller");
const analyst_controller_1 = require("../controllers/analyst.controller");
const initiative_repository_1 = require("src/data/repositories/initiative.repository");
const initiative_service_1 = require("src/data/services/initiative.service");
const module_service_1 = require("src/data/services/module.service");
const module_repository_1 = require("src/data/repositories/module.repository");
const analyst_service_1 = require("src/data/services/analyst.service");
const analyst_repository_1 = require("src/data/repositories/analyst.repository");
const initiative_controller_1 = require("../controllers/initiative.controller");
const course_controller_1 = require("../controllers/course.controller");
const course_repository_1 = require("src/data/repositories/course.repository");
const course_service_1 = require("src/data/services/course.service");
let ApiModule = exports.ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            partner_controller_1.PartnerController,
            login_controller_1.LoginController,
            module_controller_1.ModuleController,
            analyst_controller_1.AnalystController,
            initiative_controller_1.InitiativeController,
            course_controller_1.CourseController
        ],
        providers: [
            initiative_repository_1.InitiativeRepository,
            initiative_service_1.InitiativeService,
            module_service_1.ModuleService,
            module_repository_1.ModuleRepository,
            partner_service_1.PartnerService,
            partner_repository_1.PartnerRepository,
            prisma_service_1.PrismaService,
            login_service_1.LoginService,
            analyst_service_1.AnalystService,
            analyst_repository_1.AnalystRepository,
            course_repository_1.CourseRepository,
            course_service_1.CourseService
        ],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map