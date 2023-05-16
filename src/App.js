import {useEffect, useReducer} from "react";

const reducer = (state,action) => {
    switch (action.type) {
        case 'INC1':
            return {...state, count1: state.count1 + 1};
        case 'DEC1':
            return {...state, count1: state.count1 - 1};
        case 'RESET1':
            return {...state, count1: action.payload};
        case 'INC2':
            return {...state, count2: state.count2 + 1};
        case 'DEC2':
            return {...state, count2: state.count2 - 1};
        case 'RESET2':
            return {...state, count2: action.payload};

    }

};

    function App() {

        const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0});


        return (
            <div className="App">
                <div>count1:{state.count1}</div>
                <button onClick={() => dispatch({type: 'INC1'})}>INC</button>
                <button onClick={() => dispatch({type: 'DEC1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'RESET1', payload: 25})}>RESET</button>
                <hr/>
                <div>count2: {state.count2}</div>
                <button onClick={() => dispatch({type: 'INC2'})}>INC</button>
                <button onClick={() => dispatch({type: 'DEC2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'RESET2', payload: 25})}>RESET</button>
            </div>
        );
    };

export default App;
