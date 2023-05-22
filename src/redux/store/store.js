import {createStore} from "redux";
import {baseReducer} from "../reducers/index";


export const store = createStore(baseReducer);
