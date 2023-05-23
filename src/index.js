import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

let initialState = {
    cars: [],
    isLoading: false
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARS':
            return {...state, cars: [...action.payload], isLoading: false};
        case 'SET_LOADING':
            return {...state, isLoading: !state.isLoading};
        default:
            return state
    }
};

const store = createStore(carReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

