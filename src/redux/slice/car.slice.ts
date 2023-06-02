import {ICar} from "../../interfaces";
import {IError} from "../../interfaces/error.interface";
import {createSlice} from "@reduxjs/toolkit";

interface IState {
    cars: ICar[];
    errors: IError;
    trigger: boolean;
    carForUpdate: ICar;
}

const initialState:IState = {
    cars: [],
    errors:null,
    carForUpdate: null,
    trigger:false,
}

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {}
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions
};

export {
    carReducer,
    carActions,
};

