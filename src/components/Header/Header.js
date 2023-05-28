import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'comments'}>COMMENTS</NavLink>
            <NavLink to={'cars'}>CARS</NavLink>
        </div>
    );
};

export {Header};