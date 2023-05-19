import React, {useReducer} from 'react';
import {createContext} from "react";
import {carInitialState, carReducer} from "../reducers/car.reducer";

const StateContext = createContext(null);




const Provider = ({children}) => {

const reducers = {
    cars: useReducer(carReducer, carInitialState),
};

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    Provider,
    StateContext
};