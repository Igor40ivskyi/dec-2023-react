import {NavLink} from "react-router-dom";
import './Header.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {authService} from "../../services/auth.service";
import {authActions} from "../../redux/slices/auth.slice";

const Header = () => {

    const {me} = useAppSelector(state => state.authReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!me && authService.getAccessToken()) {
            dispatch(authActions.me());
        }
    }, []);
    return (
        <div className={'header'}>
            {
                me && <div className={'userIcon'}>{me.username}</div>
            }
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </div>
    );
};

export {Header};