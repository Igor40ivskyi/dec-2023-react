import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const commonService = {
    getUsers: () => axiosService.get(urls.users),
    getPosts: () => axiosService.get(urls.posts),
    getComments: () => axiosService.get(urls.comments)
};
