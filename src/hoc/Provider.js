import React, {createContext, useReducer} from 'react';
import {carInitialState, carReducer} from "../reducers/car.reducer";

export const StateContext = createContext(null);


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

export default Provider;