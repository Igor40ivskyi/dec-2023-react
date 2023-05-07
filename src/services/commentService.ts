import {IRes} from "../types/resType";
import {IComment} from "../interfaces/commentInterface";
import {placeAxiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: (): IRes<IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create: (comment:IComment): IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments,comment),
};

export {
    commentService
};

