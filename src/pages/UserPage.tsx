import React, {FC} from 'react';
import Users from "../components/Users/Users";
import {Outlet} from "react-router-dom";

const UserPage:FC = () => {
    return (
        <div style={{display:'flex'}}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export default UserPage;