import { LoginService } from "src/data/services/login.service";
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    Login(credentials: {
        email: string;
        password: string;
    }): Promise<object>;
}
