import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../interfaces/userInterface";
import UserForm from "../components/UserForm/UserForm";
import Users from "../components/Users/Users";
import {userService} from "../services/userService";

interface IProps {

}

const UserPage:FC<IProps> = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UserPage;
