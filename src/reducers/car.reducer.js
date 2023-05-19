const carInitialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const carActionTypes = {
    SAVE_ALL: 'SAVE_ALL',
    TRIGGER: 'TRIGGER',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE'
};

const carActions = {
    saveAll: (cars) => ({type: carActionTypes.SAVE_ALL, payload: cars}),
    setCarForUpdate: (car) => ({type: carActionTypes.SET_CAR_FOR_UPDATE, payload: car}),
    setTrigger: () => ({type: carActionTypes.TRIGGER}),
};

const carReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.SAVE_ALL:
            return {...state, cars: [...action.payload]};
        case carActionTypes.TRIGGER:
            return {...state, trigger: !state.trigger};
        case carActionTypes.SET_CAR_FOR_UPDATE:
            return {...state, carForUpdate: action.payload};
        default:
            return state;
    }
};

export {
    carReducer,
    carInitialState,
    carActions
};
