import {axiosService} from "./axios.service";
import {cars} from "../constants";
import {IRes} from "../types";
import {ICar} from "../interfaces";

export const carService = {
    getCars: (): IRes<ICar[]> => axiosService.get(cars),
    createCar: (car: ICar): IRes<ICar> => axiosService.post(cars, car),
    updateCar: (id: number, car: ICar): IRes<ICar> => axiosService.put(`${cars}/${id}`, car),
    deleteCar: (id: number): IRes<void> => axiosService.delete(`${cars}/${id}`),
};



