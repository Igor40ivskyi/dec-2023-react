import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    let [cars, setCars] = useState([]);

    let [allCars, setAllCars] = useState(null);

    let [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value));
    }, [allCars]);

    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;