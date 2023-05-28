import {owuLinkpcAxiosService} from "./axios.service";
import {endpoints} from "../constants";

export const carService = {
    getCars: () => owuLinkpcAxiosService.get(endpoints.cars),
    postCar: (car) => owuLinkpcAxiosService.post(endpoints.cars, car),
    updateCar: (id, car) => owuLinkpcAxiosService.patch(`${endpoints.cars}/${id}`, car),
    deleteCar: (id) => owuLinkpcAxiosService.delete(`${endpoints.cars}/${id}`),
};

