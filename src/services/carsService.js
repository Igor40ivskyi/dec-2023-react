import {axiosService} from "./axiosService";
import {points} from "../configs/urls";

const carsService = {
    getAll: () => axiosService.get(points.cars),
    getById: (id) => axiosService.get(`${points.cars}/${id}`),
    create: (car) => axiosService.post(points.cars, car),
    update: (id, car) => axiosService.put(`${points.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${points.cars}/${id}`),
}

export {
    carsService
};