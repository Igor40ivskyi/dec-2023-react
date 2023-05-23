import React from 'react';
import {useSelector} from "react-redux";

const UserInfo = () => {

    const {userInfo} = useSelector(state => state.userReducer);

        return (
            <div>
                {userInfo &&
                    <div>
                        <div>id - {userInfo.id}</div>
                        <div>name - {userInfo.name}</div>
                        <div>username - {userInfo.username}</div>
                        <div>email - {userInfo.email}</div>
                        <div>street - {userInfo.address.street}</div>
                        <div>suite - {userInfo.address.suite}</div>
                        <div>city - {userInfo.address.city}</div>
                        <div>zipcode - {userInfo.address.zipcode}</div>
                        <div>phone - {userInfo.phone}</div>
                        <div>website - {userInfo.website}</div>
                    </div>}
            </div>
        );
    }


export default UserInfo;