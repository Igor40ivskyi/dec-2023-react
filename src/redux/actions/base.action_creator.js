import {baseAction} from "./base.action";

export const baseActionCreator = {
    setUsers: (value) => ({type: baseAction.SET_USERS, payload: value}),
    setPosts: (value) => ({type: baseAction.SET_POSTS, payload: value}),
    setComments: (value) => ({type: baseAction.SET_COMMENTS, payload: value}),
    setUserTrigger: (boolean) => ({type: baseAction.SET_USER_TRIGGER,payload:boolean}),
    setUserInfo: (value) => ({type: baseAction.SET_USER_INFO, payload: value}),
};