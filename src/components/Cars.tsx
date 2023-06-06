import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux/slices";
import {Car} from "./Car";

const Cars:FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);
    console.log(cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getCars());
    },[dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};