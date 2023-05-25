import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user: null
};

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        setAll: (state, action) => {
            console.log(action);
            state.users = action.payload;
        },
        setSingle: (state, action) => {
            console.log(action);
            state.user = action.payload;
        },
    }
});

const {reducer: userReducer, actions} = slice;

const userActions = {
    ...actions
};

export {
    userReducer,
    userActions
};
