import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/carInterface";
import './CarForm.css'
import {carService} from "../../services/carService";
import {IUseState} from "../../types/useStateType";

interface IProps {
    setReloader: IUseState<boolean>;
    carForUpdate: ICar|null;
    setCarForUpdate:IUseState<ICar|null>
}

const CarForm:FC<IProps> = ({setReloader,carForUpdate,setCarForUpdate}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm<ICar>();

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar,value,{shouldValidate: true})
                }
            });
        }
    }, [carForUpdate]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setReloader(prev => !prev);
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate!.id, car);
        setReloader(prev => !prev);
        setCarForUpdate(null);
        reset();
    };

    return (
        <div className={'formWrap'}>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input className={'fontSize'} type="text" placeholder={'brand'} {...register('brand')}/>
                <input className={'fontSize'} type="text" placeholder={'price'} {...register('price')}/>
                <input className={'fontSize'} type="text" placeholder={'year'} {...register('year')} />
                <button className={'fontSize'}>{carForUpdate?'update':'save'}</button>
            </form>
        </div>
    );
};

export default CarForm;