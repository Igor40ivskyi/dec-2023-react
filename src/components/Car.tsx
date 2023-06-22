import {FC} from "react";
import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";

interface IProps {
    car: ICar;
}

const Car: FC<IProps> = ({car}) => {

    const {id, price, brand, year,photo} = car;

    const dispatch = useAppDispatch();

    return (
        <div>
            <img src={photo || 'images/empty.jpg'} alt={brand}/>
            <div>id - {id}</div>
            <div>price - {price}</div>
            <div>brand - {brand}</div>
            <div>year - {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete</button>
            <input type="file" accept={'image/jpeg, image/png'} style={{display:'none'}}/>
        </div>
    );
};

export {Car};