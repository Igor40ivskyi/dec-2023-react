import React from 'react';
import {useDispatch} from "react-redux";
import {baseActionCreator} from "../../redux/actions/base.action_creator";

const User = ({user}) => {
    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>surname - {username}</div>
            <button onClick={() => dispatch(baseActionCreator.setUserInfo(user))}>INFO</button>
        </div>
    );
};

export default User;