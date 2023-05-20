import {useDispatch, useSelector} from "react-redux";
import AAA from "./AAA";

function App() {


    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INC', payload: 5});
    };

    const decrement = () => {
        dispatch({type: 'DEC'});
    };

    const reset = () => {
        dispatch({type: 'RESET'});
    };


    return (
        <div className="App">
            <button onClick={increment}>incremet</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <AAA/>
        </div>
    );
}

export default App;
