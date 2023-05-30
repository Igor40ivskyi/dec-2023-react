import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger:false,
    error:null,
    loading:false,
};

const getCars = createAsyncThunk(
    'carSlice/getCars',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getCars();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, thunkAPI) => {
        try {
            await carService.createCar(car);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id,car}, thunkAPI) => {
        try {
            await carService.updateCar(id, car);
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const delCar = createAsyncThunk(
    'carSlice/delCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteCar(id);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getCars.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;
            })
            .addCase(getCars.pending,state => {
                state.loading = true;
            })
            .addCase(updateCar.fulfilled,state=>{
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(),state => {
                state.trigger = !state.trigger;
                // state.loading = false;
            })
            .addMatcher(isPending(getCars),state=>{
                // state.loading = false;
            })
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getCars,
    createCar,
    updateCar,
    delCar,
};

export {
    carReducer,
    carActions,
};
