import React, {useEffect} from 'react';
import './CarForm.css'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../validators/carValidator";
import {carsService} from "../../services/carsService";
import {useDispatch, useSelector} from "react-redux";
import {baseActionCreator} from "../../redux/actions/base.action-creator";

const CarForm = ({setUpdateAfterCreate}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm(
        {resolver: joiResolver(carValidator)});

    const carForUpdate = useSelector(state => state.carForUpdate);

    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    const save = async (obj) => {
        const {data} = await carsService.create(obj);
        dispatch(baseActionCreator.setTrigger());
        reset();
    };

    const update = async (obj) => {
        const {data} = await carsService.update(carForUpdate.id, obj);
        dispatch(baseActionCreator.setTrigger());
        reset();
    };

    return (
        <form className={'form'} onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input className={'carInput'} type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input className={'carInput'} type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input className={'carInput'} type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button className={'carButton'}>{carForUpdate?'update':'create'}</button>
        </form>
    );
};

export default CarForm;