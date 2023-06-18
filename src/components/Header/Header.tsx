import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </div>
    );
};

export {Header};