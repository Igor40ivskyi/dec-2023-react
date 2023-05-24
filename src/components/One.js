import {useDispatch} from "react-redux";
import {count1Actions} from "../redux/slices/count1Slice";

const One = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(count1Actions.inc(1000))}>inc</button>
            <button onClick={() => dispatch(count1Actions.dec())}>dec</button>
            <button onClick={() => dispatch(count1Actions.reset(99999999))}>reset</button>
        </div>
    );
};

export {One};