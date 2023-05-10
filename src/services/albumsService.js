import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const albumsService = {
    getAll: () => axiosService.get(urls.albums),
};

export {
    albumsService
};
