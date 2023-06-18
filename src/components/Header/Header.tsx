import {NavLink} from "react-router-dom";
import './Header.css';
import {useAppSelector} from "../../hooks";

const Header = () => {

    const {me} = useAppSelector(state => state.authReducer);


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