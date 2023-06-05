import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import {Car} from "./Car";

const Cars = () => {


    const {cars,trigger,loading,errors} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getCars());
    }, [dispatch,trigger]);

    return (
        <div>
            <div>
                {errors&& <h2>{errors.year}</h2>}
                {errors&& <h2>{errors.price}</h2>}
                {errors&& <h2>{errors.brand}</h2>}
                {errors&& <h2>{errors.detail}</h2>}
                {loading&& <h2>LOADING...</h2>}
            </div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};