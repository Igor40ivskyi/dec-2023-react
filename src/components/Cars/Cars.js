import {useEffect} from "react";
import {carService} from "../../services/car.service";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const {cars,trigger} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        carService.getCars().then(value => value.data).then(value => dispatch(carActions.setCars(value)));
    },[dispatch,trigger]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};