import React, {createContext, useReducer} from 'react';

export const MyContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case 'XXX':
            return {...state, name: 'vasya'};
    }
};

const carInitialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const Provider = ({children}) => {

    const reducers = {
        cars: useReducer(reducer, carInitialState),
    };

    return (
        <div>
            <MyContext.Provider value={reducers}>
                {children}
            </MyContext.Provider>
        </div>
    );
};

export default Provider;