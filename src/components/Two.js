import {useDispatch} from "react-redux";
import {count2Actions} from "../redux/slices/count2Slice";

const Two = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc(5))}>inc</button>
            <button onClick={() => dispatch(count2Actions.dec(100))}>dec</button>
            <button onClick={() => dispatch(count2Actions.reset(0))}>reset</button>
        </div>
    );
};

export {Two};