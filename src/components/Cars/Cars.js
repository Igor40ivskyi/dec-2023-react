import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/carsService";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import './Cars.css'

const Cars = () => {

    let [cars, setCars] = useState([]);

    let [carForUpdate, setCarForUpdate] = useState(null);

    let [reloadAfterCreate, setReloadAfterCreate] = useState(null);

    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => setCars(value));
    }, [reloadAfterCreate]);

    return (
        <div>
            <div className={'formContainer'}>
                <CarForm setUpdateAfterCreate={setReloadAfterCreate} carForUpdate={carForUpdate}/>
            </div>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value} setUpdateCar={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;