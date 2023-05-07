import {ICar} from "../interfaces/carInterface";
import {carsAxiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";

const carService = {
    getAll: (): IRes<ICar[]> => carsAxiosService.get(urls.carAPI.cars),
    create: (car: ICar): IRes<ICar> => carsAxiosService.post(urls.carAPI.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carsAxiosService.put(urls.carAPI.byId(id), car),
    deleteById: (id: number): IRes<ICar> => carsAxiosService.delete(urls.carAPI.byId(id)),
};

export {
    carService
};

