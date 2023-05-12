import {ITodo} from "../interfaces/todo.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";
import {IRes} from "../types/axiosRes.type";
import {IAlbum} from "../interfaces/album.interface";
import {IComment} from "../interfaces/comment.interface";
import {IPost} from "../interfaces/post.interface";

const unitedService = {
    getAllTodos: (): IRes<ITodo[]> => axiosService.get(urls.todos),
    getAllAlbums: (): IRes<IAlbum[]> => axiosService.get(urls.albums),
    getAllComments: (): IRes<IComment[]> => axiosService.get(urls.comments),
    getPostById: (id: string): IRes<IPost> => axiosService.get(`${urls.posts}/${id}`),
};

export {
    unitedService
};
