import React, {useContext, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {ReducerContext} from "../../hoc/Provider";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm();

    const {cars} = useContext(ReducerContext);

    const [{carForUpdate}, dispatch] = cars;

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    const saveCar = async (car) => {
        await carService.create(car);
        dispatch({type: 'TRIGGER'});
        reset();
    };

    const updateCar = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch({type: 'TRIGGER'});
        reset();
        dispatch({type:'SET_CAR_FOR_UPDATE', payload: null})
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