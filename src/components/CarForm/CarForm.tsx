import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";

const CarForm = () => {

    const {reset, register, handleSubmit} = useForm<ICar>();


    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export default CarForm;