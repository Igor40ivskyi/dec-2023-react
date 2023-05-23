import React from 'react';
import {useSelector} from "react-redux";
import User from "../User/User";

const Users = () => {

    const {users} = useSelector(state => state.userReducer);
    console.log(users);
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;