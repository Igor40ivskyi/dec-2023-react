import React, {FC, useEffect, useState} from 'react';

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import CarForm from "../CarForm/CarForm";
import Car from "../Car/Car";
import './Cars.css'

interface IProps {

}

const Cars:FC<IProps> = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [reloader,setReloader] =useState<boolean>(false);
    const [carForUpdate,setCarForUpdate] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    }, [reloader]);

    return (
        <div>
            <CarForm setReloader={setReloader} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div className={'carCardsWrap'}>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setReloader={setReloader}/>)}
            </div>
        </div>
    );
};

export default Cars;