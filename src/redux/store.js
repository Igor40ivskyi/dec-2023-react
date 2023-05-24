import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices/count1Slice";
import {count2Reducer} from "./slices/count2Slice";

const rootReducer = combineReducers({
    count1Reducer: count1Reducer,
    count2Reducer:count2Reducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};
