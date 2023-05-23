import React from 'react';

const UserInfo = ({userInfo}) => {

    const {id, name, username, phone, email} = userInfo;

    return (
        <div>
            {userInfo &&
                <div>
                    <div>{id}</div>
                    <div>{name}</div>
                    <div>{username}</div>
                    <div>{phone}</div>
                    <div>{email}</div>
                </div>}
        </div>
    );
};

export default UserInfo;