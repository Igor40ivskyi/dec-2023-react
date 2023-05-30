import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div style={{margin: 20}}>
            <div>id - {id}</div>
            <div>brand - {brand}</div>
            <div>price - {price}</div>
            <div>year - {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=> dispatch(carActions.delCar({id}))} >del</button>
        </div>
    );
};

export {Car};