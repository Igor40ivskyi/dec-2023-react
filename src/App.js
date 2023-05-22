import {useDispatch, useSelector} from "react-redux";
import AAA from "./AAA";
import {decrement, increment, reset} from "./redux/actions";

function App() {


    const dispatch = useDispatch();

    const onincrement = () => {
        dispatch(increment(20));
    };

    const ondecrement = () => {
        dispatch(decrement(10));
    };

    const onreset = () => {
        dispatch(reset());
    };


    return (
        <div className="App">
            <button onClick={onincrement}>incremet</button>
            <button onClick={ondecrement}>decrement</button>
            <button onClick={onreset}>reset</button>
            <AAA/>
        </div>
    );
}

export default App;
