import {useDispatch} from "react-redux";
import {count1Actions} from "../redux/slices/count1Slice";

const One = () => {

    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(count1Actions.inc())}>plus</button>
            <button onClick={() => dispatch({type: 'count1Slice/dec', payload: undefined})}>minus</button>
            <button onClick={() => dispatch(count1Actions.reset('xxxxx'))}>zero</button>
        </div>
    );
};

export {One};