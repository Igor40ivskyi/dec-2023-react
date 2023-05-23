import React, {useEffect} from 'react';
import {commonService} from "../../services";
import {useDispatch} from "react-redux";
import Users from "../../components/Users/Users";
import {getUsers} from "../../redux/actions/base.action_creator";

import './UsersPage.css'
import UserInfo from "../../components/UserInfo/UserInfo";

const UsersPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        commonService.getUsers().then(value => value.data)
            .then(value => dispatch(getUsers(value)));
    },[dispatch]);


    return (
        <div className={'usersPage'}>
            <div>
                <Users/>
            </div>
            <div>
                <UserInfo/>
            </div>
        </div>
    );
};

export default UsersPage;