import {IAxiosRes} from "../types";
import {ICar} from "../interfaces";
import {axiosService} from "./axios.service";
import {cars} from "../constants";

export const carService = {
    getCars: (): IAxiosRes<ICar[]> => axiosService.get(cars),
    postCar: (car: ICar): IAxiosRes<ICar> => axiosService.post(cars, car),
    updateCar: (id: number, car: ICar): IAxiosRes<ICar> => axiosService.put(`${cars}/${id}`, car),
    delCar: (id: number): IAxiosRes<void> => axiosService.delete(`${cars}/${id}`),
};
