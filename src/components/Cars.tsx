import {FC} from "react";
import {useSelector} from "react-redux";

const Cars:FC = () => {

    const state = useSelector(state => state);

    return (
        <div>
            Cars
        </div>
    );
};

export {Cars};