import {useEffect, useReducer} from "react";

const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    return 'xxx';
};

function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    console.log(state);

    useEffect(() => {
        dispatch(233);
    }, []);

    return (
        <div className="App">
            App
        </div>
    );
}

export default App;
