import axios from "axios";
import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";

const todosService = {
    getAll: () => axiosService.get(urls.todos),
};

export {todosService};