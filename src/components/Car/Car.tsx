import React, {FC} from 'react';

import {ICar} from "../../interfaces/carInterface";
import './Car.css'

interface IProps {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div className={'carCard'}>

            <div className={'carInfoBlock'}>
                <div>id :{id}</div>
                <div>brand :{brand}</div>
                <div>price :{price}</div>
                <div>year :{year}</div>
            </div>

            <div className={'carButtonsBlock'}>
                <button>update</button>
                <button>delete</button>
            </div>
        </div>
    );
};

export default Car;