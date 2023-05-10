import {axiosService} from "./axiosService";
import {posts, urls} from "../constants/urls";

const postsService = {
    getById: (id) => axiosService.get(urls.posts.getById(id)),
};

export {
    postsService
};

