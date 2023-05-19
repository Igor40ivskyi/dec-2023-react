import React, {useContext, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {ReducerContext} from "../../hoc/Provider";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();

    const [{carForUpdate},dispatch] = useAppReducer(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    const saveCar = async (car) => {
        await carService.create(car);
        dispatch(carActions.setTrigger());
        reset();
    };

    const updateCar = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carActions.setTrigger());
        reset();
        dispatch(carActions.setCarForUpdate(null));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?updateCar:saveCar)} >
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate?'UPDATE':'SAVE'}</button>
            </form>
        </div>
    );
};

export default CarForm;