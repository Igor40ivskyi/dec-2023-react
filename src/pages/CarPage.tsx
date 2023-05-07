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

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    }, [onChange]);

    return (
        <div>
            <CarForm setOnChange={setOnChange}/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarPage;