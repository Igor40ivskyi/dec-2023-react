import {baseActions} from "../actions";

const initialState = {
    users: [],
    posts: [],
    comments: [],
    userInfo:null
};


export const baseReducer = (state = initialState, action) => {

    switch (action.type) {
        case baseActions.GET_USERS:
            console.log(action.payload);
            return {...state, users: [...action.payload]};
        case baseActions.GET_POSTS:
            return {...state, posts: [...action.payload]};
        case baseActions.GET_COMMENTS:
            return {...state, comments: [...action.payload]};
        case baseActions.SET_USER_INFO:
            return {...state, userInfo: action.payload}
        default:
            return state;
    }
};

