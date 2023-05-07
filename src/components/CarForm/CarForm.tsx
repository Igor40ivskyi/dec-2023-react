import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {carValidator} from "../../validators/carValidator";
import {IUseState} from "../../types/useStateType";

interface IProps {
    setOnChange: IUseState<boolean>;
}

const CarForm:FC<IProps> = ({setOnChange}) => {

    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car);
        setOnChange(prevState => !prevState);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>save</button>
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