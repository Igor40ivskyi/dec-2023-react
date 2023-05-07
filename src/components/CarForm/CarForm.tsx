import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";
import {IUseState} from "../../types/useStateType";

interface IProps {
    setOnChange: IUseState<boolean>;
    carForUpdate: ICar | null;
    setCarForUpdate: IUseState<ICar | null>;
}

const CarForm:FC<IProps> = ({setOnChange,carForUpdate,setCarForUpdate}) => {

    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value,{shouldValidate: true});
                }
            });
        }
    },[carForUpdate]);

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setOnChange(prevState => !prevState);
        reset();
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate!.id, car);
        setOnChange(prev => !prev);
        reset();
        setCarForUpdate(null);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
            </form>

            <div>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>
        </div>
    );
};

export default CarForm;