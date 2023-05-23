import {axiosService} from "./axios.service";
import {endpoints} from "../constants/urls";

export const commonService = {
    getAllUsers: () => axiosService.get(endpoints.users),
    getAllPosts: () => axiosService.get(endpoints.posts),
    getAllComments: () => axiosService.get(endpoints.comments),
};

