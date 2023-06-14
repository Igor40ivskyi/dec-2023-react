import {NavLink} from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <div className={'header'}>
            <div>Logo</div>
            <div>
                <NavLink to={'login'}>LOGIN</NavLink>
                <NavLink to={'register'}>REGISTER</NavLink>
            </div>
        </div>
    );
};

export {Header};