import axios from "axios";
import {axiosService} from "./axios.service";
import {cars} from "../constants/urls";

const carService = {
    getAll: () => axiosService.get(cars),
    create: (car) => axiosService.post(cars, car),
    updateById: (id, car) => axiosService.put(`${cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${cars}/${id}`),
};

export {carService};

