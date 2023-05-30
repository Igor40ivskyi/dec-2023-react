import {axiosService} from "./axios.service";
import {cars} from "../constants";

export const carService = {
    getCars: () => axiosService.get(cars),
    createCar: (car) => axiosService.post(cars, car),
    updateCar: (id, car) => axiosService.put(`${cars}/${id}`, car),
    deleteCar: (id) => axiosService.delete(`${cars}/${id}`),
};