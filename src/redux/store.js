import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices/count1Slice";
import {userReducer} from "./slices/userSlice";

const rootReducer = combineReducers({
    count1: count1Reducer,
    user:userReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

