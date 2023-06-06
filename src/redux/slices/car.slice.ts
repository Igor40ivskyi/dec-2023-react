import {ICar} from "../../interfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {carService} from "../../services";

interface IInitialState {
    cars: ICar[];
    carForUpdate: ICar;
    trigger: boolean;
    loading: boolean;
}

const initialState: IInitialState = {
    cars: [],
    carForUpdate: null,
    trigger: false,
    loading: false,
};


const getCars = createAsyncThunk<ICar[], void>(
    'carSlice/getCars',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getCars();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);


const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCars.fulfilled, (state,action) => {
                state.cars = action.payload;
            }),

});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getCars,
};

export {
    carReducer,
    carActions,
};

