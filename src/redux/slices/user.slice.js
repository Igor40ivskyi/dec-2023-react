import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    trigger: false,
};

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            console.log(state.users);
            state.users = action.payload;
        },
        trigger: (state,action) => {
            console.log(state);
            console.log(action);
            state.trigger = !state.trigger;
        },
    }
});

const {reducer: userReducer, actions} = slice;

const userActions = {
    ...actions
};

export {
    userReducer,
    userActions,
};


