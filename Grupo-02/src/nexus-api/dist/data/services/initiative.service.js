"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitiativeService = void 0;
const common_1 = require("@nestjs/common");
const initiative_queries_1 = require("../queries/initiative.queries");
const prisma_service_1 = require("../prisma.service");
const initiative_repository_1 = require("../repositories/initiative.repository");
let InitiativeService = exports.InitiativeService = class InitiativeService {
    constructor(prisma, repository) {
        this.prisma = prisma;
        this.repository = repository;
    }
    async findAllinitiativesAndModulesAssociated() {
        try {
            return await this.prisma.$queryRaw(initiative_queries_1.initiativeQueries.findAllInitiativesAndModules);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async createInitiatives(initiativeDto) {
        return await this.repository.create(initiativeDto);
    }
    async findAllInitiatives() {
        return await this.repository.findAll();
    }
};
exports.InitiativeService = InitiativeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, initiative_repository_1.InitiativeRepository])
], InitiativeService);
//# sourceMappingURL=initiative.service.js.map