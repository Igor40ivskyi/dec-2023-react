import React from 'react';

import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";

const Car = ({car}) => {

    const [,dispatch] = useAppReducer((context) => context.cars);
    
    const {id, brand, year, price} = car;

    return (
        <div>
            <div>id :{id}</div>
            <div>brand :{brand}</div>
            <div>year :{year}</div>
            <div>price :{price}</div>

            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>

        </div>
    );
};

export default Car;