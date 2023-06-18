import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/auth.interface";
import {useAppDispatch} from "../hooks";
import {authActions} from "../redux/slices/auth.slice";
import {useNavigate} from "react-router-dom";

const RegisterForm: FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm<IAuth>();

    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled') {
            navigate('/login');
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>REGISTER</button>
        </form>
    );
};

export {RegisterForm};