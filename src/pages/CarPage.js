import {CarForm} from "../components";
import {Cars} from "../components";
import {useSelector} from "react-redux";

const CarPage = () => {

    const {error,loading} = useSelector(state => state.cars);

    return (
        <div>
            <CarForm/>
            {error && <h1>{JSON.stringify(error)}</h1>}
            {loading&& <h2>LOADING...</h2>}
            <Cars/>
        </div>
    );
};

export {CarPage};