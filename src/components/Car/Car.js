import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const del = async () => {
        dispatch(carActions.deleteCar({id}))
    };

    return (
        <div>
            <div>id - {id}</div>
            <div>brand - {brand}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={del}>delete</button>
        </div>
    );
};

export {Car};