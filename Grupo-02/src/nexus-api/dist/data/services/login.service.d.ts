import { PrismaService } from "../prisma.service";
import { ILoginService } from "src/business/services/login-impl.service";
export declare class LoginService implements ILoginService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    login(credentials: {
        email: string;
        password: string;
    }): Promise<object>;
}
