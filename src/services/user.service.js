import {placeholderAxiosService} from "./axios.service";
import {endpoints} from "../constants";

export const userService = {
    getUsers: () => placeholderAxiosService.get(endpoints.users),
    postUser: (user) => placeholderAxiosService.post(endpoints.users, user),
};

