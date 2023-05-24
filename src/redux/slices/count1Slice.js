import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0
};

const slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc: (state,action) => {
            state.count1 += action.payload;
        },
        dec: state => {
            state.count1 -= 100;
        },
        reset: (state,action) => {
            state.count1 = action.payload;
        },
    }
});

const {reducer: count1Reducer, actions} = slice;

const count1Actions = {
    ...actions
};

export {
    count1Reducer,
    count1Actions
};

