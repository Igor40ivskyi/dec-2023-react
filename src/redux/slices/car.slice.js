import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: false,
    carForUpdate:null,
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getCars();
            return data;
        }catch (e) {

        }
    }
);

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
    },
    extraReducers:{
        [getAll.fulfilled]: (state, action) => {
            console.log(action);
            state.cars = action.payload;
        },
    }

});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll
};

export {
    carReducer,
    carActions,
};

