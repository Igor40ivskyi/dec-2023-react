import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from './App';
import {createStore} from "redux";

const baseReducer = (state=0,action   ) => {
    switch (action.type) {
        case 'INC':
            return state = state + action.payload;
        case 'DEC':
            return --state;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

const store = createStore(baseReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

