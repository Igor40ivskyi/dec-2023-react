import React, {useEffect} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";

const Cars = () => {

    const [{cars: allCars, trigger}, dispatch] = useAppReducer(state => state.cars);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.saveAll(value)));
    }, [trigger,dispatch]);


    return (
        <div>
            {allCars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;