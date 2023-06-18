import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/auth.interface";
import {useAppDispatch} from "../hooks";
import {useNavigate} from "react-router-dom";
import {authActions} from "../redux/slices/auth.slice";

const LoginForm:FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm<IAuth>();

    const loginUser: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login(user));
        if (requestStatus === 'fulfilled') {
            navigate('/cars');
        }
    };

    return (
        <form onSubmit={handleSubmit(loginUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>LOGIN</button>
        </form>
    );
};

export {LoginForm};