import React from 'react';
import {carService} from "../../services/car.service";
import {carActions} from "../../reducers/car.reducer";
import {useAppReducer} from "../../hooks/useAppReducer";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const [,dispatch] = useAppReducer(state => state.cars);

    const deleteCar = async () => {
        await carService.deleteById(car.id);
        dispatch(carActions.setTrigger());
    };

    return (
        <div>
            <div>id - {id}</div>
            <div>brand - {brand}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>UPDATE</button>
            <button onClick={() => deleteCar()}>DELETE</button>
        </div>
    );
};

export default Car;