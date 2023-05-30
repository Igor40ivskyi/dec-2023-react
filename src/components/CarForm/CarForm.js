import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {

    const {carForUpdate} = useSelector(state => state.cars);

    const {register,reset,handleSubmit,setValue} = useForm();

    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    const save = (car) => {
        dispatch(carActions.createCar({car}));
        reset();
    };

    const update = (car) => {
        dispatch(carActions.updateCar({id: carForUpdate.id, car}))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)} style={{margin: 20}}>
            <input type="text" placeholder={'brand'}  {...register('brand')} />
            <input type="text" placeholder={'price'}  {...register('price')} />
            <input type="text" placeholder={'year'}  {...register('year')} />
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};