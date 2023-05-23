import {baseActions} from "../actions";

const initialState = {
    users: [],
    userInfo:null
};


export const userReducer = (state = initialState, action) => {
    console.log('USER REDUCER', action);
    switch (action.type) {
        case baseActions.GET_USERS:
            return {...state, users: [...action.payload]};
        case baseActions.SET_USER_INFO:
            return {...state, userInfo: action.payload}
        default:
            return state;
    }
};

