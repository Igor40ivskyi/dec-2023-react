import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: false,
    carForUpdate: null,
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            console.log(thunkAPI.getState());
            const {data} = await carService.getCars();
            // await new Promise(resolve => setTimeout(resolve, 1000));
            // await new Promise(resolve => setTimeout(resolve, 1000));
            // await new Promise(resolve => setTimeout(resolve, 1000));
            // await new Promise(resolve => setTimeout(resolve, 1000));
            // await new Promise(resolve => setTimeout(resolve, 1000));
            return data;
        }catch (e) {

        }
    }
);

const create = createAsyncThunk(
    'carSlice/create', async ({car}, thunkAPI) => {
        try {
            await carService.postCar(car);
            // await new Promise(resolve => setTimeout(resolve, 1000));
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }

    }
);

const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateCar(id, car);
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }

    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
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
    reducers:{
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
    },
    // extraReducers:{
    //     [getAll.fulfilled]: (state, action) => {
    //         state.cars = action.payload;
    //     },
    //     [create.fulfilled]: (state, action) => {
    //         state.trigger = !state.trigger;
    //     },
    //     [create.rejected]: (state, action) => {
    //     },
    // }
    // extraReducers: builder =>
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.cars = action.payload;
    //             state.loading = false;
    //         })
    //         .addCase(getAll.pending,(state, action)=>{
    //             state.loading = true;
    //         })
    //         .addCase(create.fulfilled, (state, action) => {
    //             console.log("FULLFILED");
    //             state.trigger = !state.trigger;
    //             state.loading = false;
    //         })
    //         .addCase(create.pending, (state, action) => {
    //             state.loading = true;
    //         })
    //         .addCase(create.rejected, (state, action) => {
    //             console.log("REJECTED");
    //             state.error = action.payload;
    //             state.loading = false;
    //         }),
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(update.fulfilled, (state, action) => {
                state.carForUpdate = null;
            })
            // .addDefaultCase((state, action) => {
            //     console.log('DEFAULT');
            //     console.log(action.type)
            // }),
            .addMatcher(isPending(), (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false;
                state.error = null;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addMatcher(isFulfilled(create, update,deleteCar), state => {
                state.trigger = !state.trigger;
            }),
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar,
};

export {
    carReducer,
    carActions,
};

