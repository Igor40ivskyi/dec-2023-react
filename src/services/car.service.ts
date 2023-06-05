import {AxiosResponse} from "axios";
import {ICar} from "../interfaces";
import {axiosService} from "./axios.service";
import {cars} from "../constants";

export const carService = {
    getCars: (): Promise<AxiosResponse<ICar[]>> => axiosService.get(cars),
    postCar: (car: ICar): Promise<AxiosResponse<ICar>> => axiosService.post(cars, car),
    updateCar: (id: number, car: ICar): Promise<AxiosResponse<ICar>> => axiosService.put(`${cars}/${id}`, car),
    delCar: (id: number): Promise<AxiosResponse<void>> => axiosService.delete(`${cars}/${id}`),
};


