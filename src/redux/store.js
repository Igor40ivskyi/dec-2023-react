import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "./slices/";

const rootReducer = combineReducers({
    character: characterReducer,
});

export const setupStore =()=>  configureStore({
    reducer: rootReducer,
});
