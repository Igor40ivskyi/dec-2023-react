import {useDispatch} from "react-redux";
import {count2Actions} from "../redux/slices/count2.slice";

const ComponentTwo = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc())}>inc</button>
            <button onClick={() => dispatch(count2Actions.dec())}>dec</button>
            <button onClick={() => dispatch(count2Actions.reset(1000000000000000000))}>reset</button>

        </div>
    );
};

export {ComponentTwo};