import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1:0
};

const slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc: (state,action) => {
            console.log(action);
            state.count1 += 1;
        },
        dec: (state, action) => {
            console.log(action);
            state.count1 -= 1;
        },
        reset: state => {
            state.count1 = 0;
        },
    }
});

const {reducer: count1Reducer, actions} = slice;

console.log(count1Reducer);

const count1Actions = {
    ...actions
}

export {
    count1Reducer,
    count1Actions
};
