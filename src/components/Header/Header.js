import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'cars'}>CARS</NavLink>
        </div>
    );
};

export {Header};