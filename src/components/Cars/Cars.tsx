import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";
import Car from "../Car/Car";
import {IUseState} from "../../types/useStateType";

interface IProps {
    cars: ICar[];
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange: IUseState<boolean>;
}

const Cars:FC<IProps> = ({cars,setCarForUpdate,setOnChange}) => {
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>)}
        </div>
    );
};

export default Cars;