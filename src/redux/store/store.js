import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "../reducers/post.reducer";
import {commentReducer} from "../reducers/comment.reducer";
import thunk from "redux-thunk";
import {userReducer} from "../reducers/user.reducer";

export const store = createStore(combineReducers({userReducer, postReducer, commentReducer}),applyMiddleware(thunk));

