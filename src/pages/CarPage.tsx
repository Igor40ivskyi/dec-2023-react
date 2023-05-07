import React, {FC, useEffect, useState} from 'react';
import CarForm from "../components/CarForm/CarForm";
import Cars from "../components/Cars/Cars";
import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/carService";

interface IProps {

}

const CarPage:FC<IProps> = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [onChange,setOnChange] = useState<boolean>(false);
    const [carForUpdate,setCarForUpdate] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    }, [onChange]);

    return (
        <div>
            <CarForm setOnChange={setOnChange} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarPage;