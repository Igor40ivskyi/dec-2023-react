import {baseActions} from "./base.action";

export const getUsers = (value) => {
    return {type: baseActions.GET_USERS, payload: value};
};

export const getPosts = (value) => {
    return {type: baseActions.GET_POSTS, payload: value};
};

export const getComments = (value) => {
    return {type: baseActions.GET_COMMENTS, payload: value};
};

export const setUserInfo = (value) => {
    return {type: baseActions.SET_USER_INFO, payload: value};
};