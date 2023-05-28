import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    cars:carReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});
