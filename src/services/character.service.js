import {axiosService} from "./axios.service";
import {baseURL, urls} from "../constants";

const characterService = {
    getAll:axiosService.get(urls.characters,)
}