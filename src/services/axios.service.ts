import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(req => {
    const access = authService.getAccessToken();
    if (access) {
        req.headers.Authorization = `Bearer ${access}`;
    }
    return req;
});

axiosService.interceptors.response.use(
    res => {
        return res
    },
    async error =>{
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._isRefreshing) {
            originalRequest._isRefreshing = true;
            try {
                await authService.refresh();
                return axiosService(originalRequest);
            }catch (e) {
                authService.deleteTokens();
                return Promise.reject(error);
            }

        }
        return Promise.reject(error);
    }
    );

export {
    axiosService
};


