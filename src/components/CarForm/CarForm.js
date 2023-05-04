import React from 'react';
import './CarForm.css'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../validators/carValidator";
import cars from "../Cars/Cars";
import {carsService} from "../../services/carsService";

const CarForm = ({setUpdateAfterCreate}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm(
        {resolver: joiResolver(carValidator)});

    const save = async (obj) => {
        const {data} = await carsService.create(obj);
        setUpdateAfterCreate(prev => !prev);
    };

    return (
        <form className={'form'} onSubmit={handleSubmit(save)}>
            <input className={'carInput'} type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input className={'carInput'} type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input className={'carInput'} type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button className={'carButton'}>create</button>
        </form>
    );
};

export default CarForm;