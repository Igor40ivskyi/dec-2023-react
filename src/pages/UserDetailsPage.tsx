import React, {FC, useEffect, useState} from 'react';
import {useAppLocation} from "../hooks/router.hooks";
import {IUser} from "../interfaces/user.interface";
import UserDetails from "../components/UserDetails/UserDetails";
import {useParams} from "react-router-dom";
import {userService} from "../services/user.service";

const UserDetailsPage:FC = () => {

    const [user, setUser] = useState(null);
    const {id} = useParams();
    const {state} = useAppLocation<IUser>();

    useEffect(() => {
        if (state) {
            setUser(state);
        }else {
            userService.getById(id).then(value => value.data).then(value => setUser(value));
        }
    }, [id,state]);

    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export default UserDetailsPage;