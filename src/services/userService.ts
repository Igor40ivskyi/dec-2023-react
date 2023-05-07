import {placeAxiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";
import {IUser} from "../interfaces/userInterface";

const userService = {
    getAll: (): IRes<IUser[]> => placeAxiosService.get(urls.placeAPI.users),
    create: (user: IUser): IRes<IUser> => placeAxiosService.post(urls.placeAPI.users, user),
};

export {
    userService
};
