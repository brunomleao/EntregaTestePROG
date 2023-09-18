"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleRepository = void 0;
const module_queries_1 = require("../queries/module.queries");
class ModuleRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(moduleDto) {
        return await this.prisma.$queryRaw(module_queries_1.moduleQueries.create(moduleDto));
    }
}
exports.ModuleRepository = ModuleRepository;
//# sourceMappingURL=module.repository.js.map