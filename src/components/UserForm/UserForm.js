import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {userService} from "../../services/user.service";
import {userActions} from "../../redux";

const UserForm = () => {

    const dispatch = useDispatch();

    const {register,reset,handleSubmit} = useForm();

    const save = async (user) => {
        await userService.postUser(user);
        reset();
        dispatch(userActions.setUsers());
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export {UserForm};