import {ICar, IError} from "../../interfaces";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {carService} from "../../services";

interface IState {
    cars: ICar[];
    errors: IError;
    trigger: boolean;
    carForUpdate: ICar;
    loading: boolean;
}

const initialState: IState = {
    cars: [],
    errors: null,
    trigger: false,
    carForUpdate: null,
    loading: false,
};


const getCars = createAsyncThunk<ICar[], void>(
    'carSlice/getCars',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getCars();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const postCar = createAsyncThunk<void, { car: ICar; }>(
    'carSlice/postCar',
    async ({car}, thunkAPI) => {
        try {
            await carService.postCar(car);
        }catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const updateCar = createAsyncThunk<void, {id:number, car: ICar; }>(
    'carSlice/updateCar',
    async ({id,car}, thunkAPI) => {
        try {
            await carService.updateCar(id, car);
        }catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const deleteCar = createAsyncThunk<void, { id: number; }>(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.delCar(id);
        }catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response.data);
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
        setError: (state, action) => {
            state.errors = null;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addMatcher(isFulfilled(postCar, updateCar, deleteCar), state => {
                state.trigger = !state.trigger;
            })
            .addMatcher(isPending(), state => {
                state.loading = true;
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false;
                state.errors = null;
            })
            .addMatcher(isRejectedWithValue(), (state,action) => {
                state.errors = action.payload;
                state.loading = false;
            }),
});

const {reducer:carReducer,actions} = slice;

const carActions = {
    ...actions,
    getCars,
    postCar,
    updateCar,
    deleteCar,
};

export {
    carReducer,
    carActions,
};

