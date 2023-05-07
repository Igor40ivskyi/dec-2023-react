import React, {FC} from 'react';
import {IUser} from "../../interfaces/userInterface";
import User from "../User/User";

interface IProps {
    users: IUser[];
}

const Users:FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(value=> <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;