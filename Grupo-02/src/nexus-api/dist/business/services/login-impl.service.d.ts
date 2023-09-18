export interface ILoginService {
    login(credentials: {
        email: string;
        password: string;
    }): Promise<object>;
}
