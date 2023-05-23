import {baseActions} from "./base.action";

export const baseActionCreator = {
    setCars: (value) => ({type: baseActions.SET_CARS, payload: value}),
    setCarForUpdate: (value) => ({type: baseActions.SET_CAR_FOR_UPDATE, payload: value}),
    setTrigger: () => ({type: baseActions.SET_TRIGGER})
};

