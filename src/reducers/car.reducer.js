const carInitialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const carReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_ALL':
            return {...state, cars: [...action.payload]};
        case 'TRIGGER':
            return {...state, trigger: !state.trigger};
        case 'SET_CAR_FOR_UPDATE':
            return {...state, carForUpdate: action.payload};
    }
};

export {
    carReducer,
    carInitialState
};
