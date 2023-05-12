import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header:FC = () => {
    return (
        <div className={'header'}>
            <NavLink className={'link'} to={'todos'}>TODOS</NavLink>
            <NavLink className={'link'} to={'albums'}>ALBUMS</NavLink>
            <NavLink className={'link'} to={'comments'}>COMMENTS</NavLink>
        </div>
    );
};

export default Header;