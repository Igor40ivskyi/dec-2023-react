import {baseAction} from "../actions/base.action";

const initialState = {
    comments: []
};

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case baseAction.SET_COMMENTS:
            return {...state, comments: [...action.payload]};
        default:
            return state;
    }
};