import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'posts'}>POSTS</NavLink>
            <NavLink to={'comments'}>COMMENTS</NavLink>
        </div>
    );
};

export default Header;