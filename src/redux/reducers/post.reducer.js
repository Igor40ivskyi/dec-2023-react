import {baseAction} from "../actions/base.action";

const initialState = {
    posts: []
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case baseAction.SET_POSTS:
            return {...state, posts: [...action.payload]};
        default:
            return state;
    }
};
