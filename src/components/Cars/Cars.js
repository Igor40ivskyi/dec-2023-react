import React, {useEffect} from 'react';
import {carService} from "../../services/carService";
import Car from "../Car/Car";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";

const Cars = () => {

    const [{cars,trigger}, dispatch] = useAppReducer(state => state.cars);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setAll(value)));
    }, [dispatch, trigger]);


    return (
        <div>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;