import {FC} from "react";
import {CarForm, Cars} from "../components";
import {useAppSelector} from "../hooks";

interface IProps {

}

const CarPage:FC<IProps> = () => {

    const {errors} = useAppSelector(state => state.carReducer);

    return (
        <div>
            <CarForm/>
            <div>
                {errors?.detail && <h2>{errors.detail}</h2>}
                {errors?.brand && <h2>{errors.brand}</h2>}
                {errors?.price && <h2>{errors.price}</h2>}
                {errors?.year && <h2>{errors.year}</h2>}
            </div>
            <Cars/>
        </div>
    );
};

export {CarPage};