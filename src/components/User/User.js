import React from 'react';

import './User.css';

const User = ({user,lift}) => {
    const {id, name} = user;
    return (
        <div className="userBlock">
            <div>id - {id}</div>
            <div>name - {name}</div>
            <button onClick={() => {
                lift(id);
            }}>show posts
            </button>
        </div>
    );
};

export default User;