import {createStore} from "redux";
import {baseReducer} from "../reducers/base.reducer";

export const store = createStore(baseReducer);