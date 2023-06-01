import {IRes} from "../types";
import {ICar} from "../interfaces";
import {ulrs} from "../constants";
import {axiosService} from "./axios.service";

export const carService = {
    getAll: (): IRes<ICar[]> => axiosService.get(ulrs.cars.cars),
    create: (car: ICar): IRes<ICar> => axiosService.post(ulrs.cars.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => axiosService.put(ulrs.cars.byId(id), car),
    deleteById: (id: number): IRes<void> => axiosService.delete(ulrs.cars.byId(id)),
};