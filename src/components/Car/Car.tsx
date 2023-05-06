import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";

interface IProps {
    car: ICar;
}

const Car:FC<IProps> = ({car}) => {

    const {id,year,brand,price} = car;

    return (
        <div>
            <div>id :{id}</div>
            <div>year :{year}</div>
            <div>brand :{brand}</div>
            <div>price :{price}</div>
        </div>
    );
};

export default Car;