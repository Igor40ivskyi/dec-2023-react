import React, {useContext, useEffect} from 'react';
import {ReducerContext} from "../../hoc/Provider";
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = () => {

    const {cars} = useContext(ReducerContext);


    const [{cars: allCars, trigger}, dispatch] = cars;

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch({type: 'SAVE_ALL', payload: value}));
    }, [trigger]);


    return (
        <div>
            {allCars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;