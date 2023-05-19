import React, {createContext, useReducer} from 'react';
import {carInitialState, carReducer} from "../reducers/car.reducer";

export const ReducerContext = createContext(null);

const Provider = ({children}) => {

    const reducers = {
        cars: useReducer(carReducer, carInitialState)
    };

    return (
        <div>
            <ReducerContext.Provider value={reducers}>
                {children}
            </ReducerContext.Provider>
        </div>
    );
};

export default Provider;