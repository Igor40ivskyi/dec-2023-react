import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";


const rootReducer = combineReducers({
    carReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});

type AppStore = ReturnType<typeof setupStore>;
type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = AppStore['dispatch'];

export type {
    AppStore,
    AppDispatch,
    RootState,
};