import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    number: 0
};

const slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc: (state, action) => {

            state.number += 5;
        },
        dec: (state, action) => {
            state.number -= 5;
        },
        reset: (state, action) => {
            console.log(action);
            state.number = action.payload;
        },
    }
});


const {reducer:count1Reducer, actions} = slice;

const count1Actions = {
    ...actions
};

export {
    count1Reducer,
    count1Actions
};
