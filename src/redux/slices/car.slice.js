import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: false,
    carForUpdate:null,
}

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        trigger: (state, action) => {
            state.trigger = !state.trigger;
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
    }
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions
};

export {
    carReducer,
    carActions,
};

