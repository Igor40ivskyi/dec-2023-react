import {FC} from "react";
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";

interface IProps {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {

    const {id, price, brand, year} = car;

    const dispatch = useAppDispatch();

    return (
        <div>
            <div>id - {id}</div>
            <div>price - {price}</div>
            <div>brand - {brand}</div>
            <div>year - {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>DEL</button>
        </div>
    );
};

export {Car};