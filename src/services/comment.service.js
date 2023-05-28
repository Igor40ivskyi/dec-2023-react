import {placeholderAxiosService} from "./axios.service";
import {endpoints} from "../constants";

export const commentService = {
    getComments: () => placeholderAxiosService.get(endpoints.comments),
};
