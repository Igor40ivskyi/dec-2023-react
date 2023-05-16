import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commonService = {
    getAllPosts: () => axiosService.get(urls.posts),
    getAllComments: () => axiosService.get(urls.comments),
};

export {
    commonService
};
