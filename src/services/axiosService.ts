import axios, {AxiosResponse} from "axios";
import {baseURL} from "../configs/urls";

const axiosService = axios.create({baseURL});

type IRes<T> = Promise<AxiosResponse<T>>;

export {
    axiosService
};

export type {
    IRes
};

