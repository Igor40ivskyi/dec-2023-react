import React, {FC, useEffect, useState} from 'react';

import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import User from "../User/User";
import './Users.css'

const Users:FC = () => {

    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    },[]);

    return (
        <div className={'usersBlock'}>
            <div>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>
        </div>
    );
};

export default Users;