import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {Outlet} from "react-router-dom";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers([...value]));

        return () => {
            console.log('done')
        };

    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
            <Outlet/>
        </div>
    );
};

export default Users;