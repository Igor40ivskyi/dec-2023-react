import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/user.interface";
import {axiosService} from "./axios.service";
import {users} from "../constants/urls";

const userService = {
    getAll: (): Promise<AxiosResponse<IUser[]>> => axiosService.get(users),
    getById: (id: string): Promise<AxiosResponse<IUser>> => axiosService.get(`${users}/${id}`),
};

export {
    userService
};

