import {combineReducers, createStore} from "redux";
import {commentReducer, postsReducer, userReducer} from "../reducers";

export const store = createStore(combineReducers({userReducer, postsReducer, commentReducer}));


