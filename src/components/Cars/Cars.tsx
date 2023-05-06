import React, {useEffect, useState} from 'react';
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    let [cars,setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    },[]);

    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(value => <Car car={value} key={value.id}/>)}
        </div>
    );
};

export default Cars;