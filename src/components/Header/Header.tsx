import {NavLink} from "react-router-dom";
import './Header.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {authService} from "../../services";
import {authActions} from "../../redux";


const Header = () => {

    const {me} = useAppSelector(state => state.authReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!me && authService.getAccessToken()) {
            dispatch(authActions.me());
        }
    }, [me, dispatch]);

    return (
        <div className={'header'}>
            <div>Logo</div>
            {
                me ?
                    <div>
                        <span>{me.username}</span>
                        <button>Logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>LOGIN</NavLink>
                        <NavLink to={'register'}>REGISTER</NavLink>
                    </div>
            }
        </div>
    );
};

export {Header};