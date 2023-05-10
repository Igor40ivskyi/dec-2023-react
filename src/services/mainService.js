import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const mainService = {
    getAllTodos: () => axiosService.get(urls.todos),
    getAllAlbums: () => axiosService.get(urls.albums),
    getAllComments: () => axiosService.get(urls.comments),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {
    mainService
};
