import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer} from "./slice";

const rootReducer = combineReducers({
    carReducer,
    authReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch,
};