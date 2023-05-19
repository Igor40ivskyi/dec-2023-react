import {useContext} from "react";
import {ReducerContext} from "../hoc/Provider";

const useAppReducer = (state) => state(useContext(ReducerContext));

export {
    useAppReducer
};

