import {baseActions} from "../actions/base.action";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: false,
};


export const baseReducer = (state = initialState, action) => {
    switch (action.type) {
        case baseActions.SET_CARS:
            return {...state, cars: [...action.payload]};
        case baseActions.SET_CAR_FOR_UPDATE:
            return {...state, carForUpdate: action.payload};
        case baseActions.SET_TRIGGER:
            return {...state, trigger: !state.trigger};
        default:
            return state;
    }
};
