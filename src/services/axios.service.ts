import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

export const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(req => {
    const access = authService.getAccessToken();
    if (access) {

    req.headers.Authorization = `Bearer ${access}`;
    }

    return req;
});