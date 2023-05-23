import {baseAction} from "../actions/base.action";

const initialState = {
    users: [],
    isLoading: false,
    userInfo:null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case baseAction.SET_USERS:
            return {...state, users: [...action.payload]};
        case baseAction.SET_USER_TRIGGER:
            return {...state, isLoading: action.payload};
        case baseAction.SET_USER_INFO:
            return {...state, userInfo: action.payload};
        default:
            return state;
    }
};