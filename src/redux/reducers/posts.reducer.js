import {baseActions} from "../actions";

const initialState = {
    posts: []
};

export const postsReducer = (state = initialState, action) => {
    console.log('POSTS REDUCER', action);
    switch (action.type) {
        case baseActions.GET_POSTS:
            return {...state, posts: [...action.payload]};
        default:
            return state;
    }
};