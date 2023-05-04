import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/carsService";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import './Cars.css'

const Cars = () => {

    let [cars, setCars] = useState([]);

    let [updateAfterCreate, setUpdateAfterCreate] = useState(null);

    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => setCars(value));
    }, [updateAfterCreate]);

    return (
        <div>
            <div className={'formContainer'}>
                <CarForm setUpdateAfterCreate={setUpdateAfterCreate}/>
            </div>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;