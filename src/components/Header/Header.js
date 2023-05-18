import React from 'react';

import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'posts'}>POSTS</NavLink>
            <NavLink to={'comments'}>COMMENTS</NavLink>
            <NavLink to={'cats_dogs'}>CAT-DOG</NavLink>
        </div>
    );
};

export default Header;