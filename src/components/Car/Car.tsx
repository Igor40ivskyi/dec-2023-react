import React, {FC} from 'react';

import {ICar} from "../../interfaces/carInterface";
import './Car.css'
import {IUseState} from "../../types/useStateType";
import {carService} from "../../services/carService";

interface IProps {
    car: ICar;
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange:IUseState<boolean>
}

const Car: FC<IProps> = ({car,setCarForUpdate,setOnChange}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setOnChange(prev => !prev);
    };

    return (
        <div className={'carCard'}>

            <div className={'carInfoBlock'}>
                <div>id :{id}</div>
                <div>brand :{brand}</div>
                <div>price :{price}</div>
                <div>year :{year}</div>
            </div>

            <div className={'carButtonsBlock'}>
                <button onClick={()=>setCarForUpdate(car)}>update</button>
                <button onClick={()=>deleteCar()}>delete</button>
            </div>
        </div>
    );
};

export default Car;