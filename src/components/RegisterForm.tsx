import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {authValidator} from "../validators";
import {useAppDispatch} from "../hooks";
import {authActions} from "../redux";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors,isValid}} = useForm<IAuth>({mode:'all', resolver: joiResolver(authValidator)});


    const registerUser:SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled') {
            navigate('/login');
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}

        </form>
    );
};

export {RegisterForm};