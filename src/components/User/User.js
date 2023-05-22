import React from 'react';
import {useDispatch} from "react-redux";
import {setUserInfo} from "../../redux/actions/base.action_creator";

const User = ({user}) => {

    const {id, name, username, email, address: {city}} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>name - {name}</div>
            <div>username - {username}</div>
            <div>city - {city}</div>
            <button onClick={() => dispatch(setUserInfo(user))}>INFO</button>
        </div>
    );
};

export default User;