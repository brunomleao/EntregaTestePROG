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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let LoginService = exports.LoginService = class LoginService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async login(credentials) {
        const { email, password } = credentials;
        if (!email || typeof email !== 'string') {
            throw new common_1.NotFoundException('Invalid email');
        }
        const isAnalyst = email.endsWith("@sou.inteli.edu.br");
        if (isAnalyst) {
            const userFound = await this.prisma.analyst.findFirst({
                where: {
                    email: email,
                    password: password,
                }
            });
            if (!userFound) {
                throw new common_1.NotFoundException('ANALYST not found');
            }
            return {
                userType: "analyst",
                isConnected: true,
            };
        }
        else {
            const userFound = await this.prisma.partner.findFirst({
                where: {
                    contactEmail: email,
                    password: password
                },
            });
            if (!userFound) {
                throw new common_1.NotFoundException('PARTNER not found');
            }
            return {
                userType: "partner",
                isConnected: true,
            };
        }
    }
};
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoginService);
//# sourceMappingURL=login.service.js.map