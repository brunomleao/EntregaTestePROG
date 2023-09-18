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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleController = void 0;
const common_1 = require("@nestjs/common");
const initiative_service_1 = require("src/data/services/initiative.service");
const module_service_1 = require("src/data/services/module.service");
let ModuleController = exports.ModuleController = class ModuleController {
    constructor(initiativesServices, moduleService) {
        this.initiativesServices = initiativesServices;
        this.moduleService = moduleService;
    }
    async findAllModules() { }
    async createModule(moduleDto) {
        return await this.moduleService.createModule(moduleDto);
    }
    async updateModuleInformations() {
        return;
    }
    async findAllModulesAndinitiativesAssociated() {
        return await this.initiativesServices.findAllinitiativesAndModulesAssociated();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "findAllModules", null);
__decorate([
    (0, common_1.Post)('/module'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "createModule", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "updateModuleInformations", null);
__decorate([
    (0, common_1.Get)('/initiativesAndModules'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "findAllModulesAndinitiativesAssociated", null);
exports.ModuleController = ModuleController = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [initiative_service_1.InitiativeService,
        module_service_1.ModuleService])
], ModuleController);
//# sourceMappingURL=module.controller.js.map