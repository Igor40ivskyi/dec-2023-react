import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators/carValidator";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";


const CarForm = () => {

    const [{carForUpdate}, dispatch] = useAppReducer(state => state.cars);

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.create(car);
        dispatch(carActions.setTrigger());
        reset();
    };

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        dispatch(carActions.setTrigger());
        reset();
        dispatch(carActions.setCarForUpdate(null));
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</button>
        </form>

        // <form onSubmit={handleSubmit(carForUpdate?update:save)}>
        //     <input type="text" placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //             message: 'Only letters min 1 max 20'
        //         },
        //         required: {value:true,message:'value is required'}
        //     })}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: {value: 0, message: 'min 0'},
        //         max: {value: 1000000, message: 'max 1000000'},
        //         required:{value:true,message:'value is required'}
        //     })}/>
        //     {errors.price && <span>{errors.price.message}</span>}
        //
        //     <input type="text" placeholder={'year'} {...register('year', {
        //         valueAsNumber: true,
        //         min: {value: 1990, message: 'min 1990'},
        //         max: {value: new Date().getFullYear(), message: `max ${new Date().getFullYear()}`},
        //         required:{value:true,message:'value is required'}
        //     })}/>
        //     {errors.year && <span>{errors.year.message}</span>}
        //
        //     <button disabled={!isValid}>{carForUpdate?'update':'create'}</button>
        // </form>

    );
};

export default CarForm;