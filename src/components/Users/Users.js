import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = ({lift}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);


    return (
        <div>
            <div>
                {users.map(value => <User key={value.id} user={value} lift={lift}/>)}
            </div>
        </div>
    );
};

export default Users;