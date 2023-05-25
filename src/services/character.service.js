import {axiosService} from "./axios.service";
import {baseURL, urls} from "../constants";

const characterService = {
    getAll:(page=15)=> axiosService.get(urls.characters,{params:{page}})
}

export {
    characterService
};

