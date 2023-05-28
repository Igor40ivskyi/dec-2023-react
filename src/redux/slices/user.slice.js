import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    trigger: false,
};

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            if (action.payload?.length) {
                state.users = action.payload;
            }else {
                console.log('ELSE')
                state.users = [...state.users, {...action.payload, id: state.users.length + 1}];
            }
        },
        trigger: (state,action) => {
            console.log('sdf')
            console.log(current(state));
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


