import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces/auth.interface";
import {AxiosError} from "axios";
import {authService} from "../../services/auth.service";
import {IUser} from "../../interfaces/user.interface";

interface IState {
    me: IUser;
}

const initialState:IState = {
    me: null,
};

const register = createAsyncThunk<void, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.register(user);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const login = createAsyncThunk<IUser, IAuth>(
    'authSlice/login',
    async (user, {rejectWithValue}) => {
        try {
            return await authService.login(user);
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const me = createAsyncThunk<IUser, void>(
    'authSlice',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);


const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload;
            }),
});

const {reducer: authReducer, actions} = slice;

const authActions = {
    ...actions,
    register,
    login,
    me,
};

export {
    authReducer,
    authActions,
};
