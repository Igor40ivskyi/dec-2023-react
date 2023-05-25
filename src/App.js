import {useSelector} from "react-redux";
import {One} from "./components/One";

function App() {

    const initialState = useSelector((state) => state.reducer);

    const number = initialState.number;

    return (
        <div className="App">
            <div>count1 - {number}</div>

            <div>
                <One/>
            </div>
        </div>
    );
}

export default App;
