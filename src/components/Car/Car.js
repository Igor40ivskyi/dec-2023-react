import React, {useContext} from 'react';
import {ReducerContext} from "../../hoc/Provider";
import {carService} from "../../services/car.service";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const {cars} = useContext(ReducerContext);

    const [, dispatch] = cars;

    const deleteCar = async () => {
        await carService.deleteById(car.id);
        dispatch({type: 'TRIGGER'});
    };

    return (
        <div>
            <div>id - {id}</div>
            <div>brand - {brand}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <button onClick={() => dispatch({type: 'SET_CAR_FOR_UPDATE', payload: car})}>UPDATE</button>
            <button onClick={() => deleteCar()}>DELETE</button>
        </div>
    );
};

export default Car;