import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices/count1Slice";

const rootReducer = combineReducers({
    reducer: count1Reducer
});

export const store = configureStore({
    reducer: rootReducer,
});

