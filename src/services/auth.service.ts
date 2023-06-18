import {IAuth} from "../interfaces/auth.interface";
import {IRes} from "../types";
import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {AxiosResponse} from "axios";
import {ITokens} from "../interfaces/tokens.interface";

class AuthService {
    private readonly accessKey = 'access';
    private readonly refreshKey = 'refresh';

    register (user:IAuth):IRes<IUser>{
        return axiosService.post(urls.auth.register, user);
    }

    async login(user: IAuth): Promise<IUser> {

        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, user);
        this.setTokens(data);
        const {data: me}: AxiosResponse<IUser> = await this.me();
        return me;
    }

    me():IRes<IUser>{
        return axiosService.get(urls.auth.me);
    }

    private setTokens(data: ITokens): void {
        localStorage.setItem(this.accessKey, data.access);
        localStorage.setItem(this.refreshKey, data.refresh);
    }

    getAccessToken(): string {
        return localStorage.getItem(this.accessKey);
    }



}

export const authService = new AuthService();