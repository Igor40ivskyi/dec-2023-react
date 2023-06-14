import {FC} from "react";
import {CarForm, Cars} from "../components";

interface IProps {

}

const CarPage:FC<IProps> = () => {

    // const {} = useAppSelector(state => state.carReducer);

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage};