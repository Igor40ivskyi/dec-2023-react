import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces";

const LoginForm = () => {

    const {handleSubmit, register,formState:{isValid}} = useForm<IAuth>();

    const login: SubmitHandler<IAuth> = (user) => {


    };

    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username', {required: true})} />
            <input type="text" placeholder={'password'} {...register('password', {required: true})} />
            <button disabled={!isValid}>Login</button>
        </form>
    );
};

export {LoginForm};