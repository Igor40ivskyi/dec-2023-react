import {axiosService} from "./axios.service";
import {baseURL, urls} from "../constants";

const characterService = {
    getAll:(page)=> axiosService.get(urls.characters,{params:{page}})
}

export {
    characterService
};

