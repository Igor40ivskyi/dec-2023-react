import {AxiosResponse} from "axios";
import {ICar} from "../interfaces/carInterface";
import {axiosService} from "./axiosService";
import {urls} from "../components/constants/urls";

const carService = {
    getAll: (): Promise<AxiosResponse<ICar[]>> => axiosService.get(urls.cars),
    create: (car: ICar): Promise<AxiosResponse<ICar>> => axiosService.post(urls.cars, car),
    updateById: (id: number, car: ICar): Promise<AxiosResponse<ICar>> => axiosService.put(`${urls.cars}/${id}`,car),
    deleteById: (id: number): Promise<AxiosResponse<ICar>> => axiosService.delete(`${urls.cars}/${id}`),
};

export {
    carService
};

