import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    cars:carReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});
