import React, {FC} from 'react';
import {ICar} from "../../interfaces/carInterface";
import Car from "../Car/Car";
import {IUseState} from "../../types/useStateType";

interface IProps {
    cars: ICar[];
    setCarForUpdate: IUseState<ICar | null>;
}

const Cars:FC<IProps> = ({cars,setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;