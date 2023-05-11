import React, {FC} from 'react';

import {IUser} from "../../interfaces/user.interface";
import './UserDetails.css'


interface IProps {
    user: IUser;
}

const UserDetails: FC<IProps> = ({user}) => {

    const {id, email, username, name, phone, address:{city}} = user;

    return (
        <div className={'fullInfoBlock'}>
            <div>
                <div className={'fullInfoBlockItem'}>id - {id}</div>
                <div className={'fullInfoBlockItem'}>email - {email}</div>
                <div className={'fullInfoBlockItem'}>username - {username}</div>
                <div className={'fullInfoBlockItem'}>name - {name}</div>
                <div className={'fullInfoBlockItem'}>phone - {phone}</div>
                <div className={'fullInfoBlockItem'}>city - {city}</div>
            </div>
        </div>
    );
};

export default UserDetails;