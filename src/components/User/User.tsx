import React, {FC} from 'react';

import {IUser} from "../../interfaces/user.interface";
import './User.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div className={'singleUserBlock'}>
            <div>{id} - {name}</div>
            <div>
                <button onClick={()=> navigate(`${id}`,{state: {...user}})}>INFO</button>
            </div>
        </div>
    );
};

export default User;