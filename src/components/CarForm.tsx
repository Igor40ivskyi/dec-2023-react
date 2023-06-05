import {useForm} from "react-hook-form";
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";
import {useEffect} from "react";

const CarForm = () => {

    const {register, handleSubmit, setValue, reset} = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year', carForUpdate.year);
            dispatch(carActions.setError(null));
        }
    },[carForUpdate,dispatch,setValue]);

    const save = async (car:ICar) => {
        await dispatch(carActions.postCar({car}));
        reset();
    };

    const update = async (car: ICar) => {
        await dispatch(carActions.updateCar({id:carForUpdate.id, car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};