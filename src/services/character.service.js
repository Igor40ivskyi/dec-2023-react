import {axiosService} from "./axios.service";
import {endpoints} from "../constants";

export const characterService = {
    getCharacters: (page) => axiosService.get(endpoints.character, {params: {page: page}}),
};

