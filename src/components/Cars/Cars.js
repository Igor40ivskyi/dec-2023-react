import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/carsService";
import Car from "../Car/Car";

const Cars = () => {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => console.log(value));
    }, []);

    return (
        <div>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;