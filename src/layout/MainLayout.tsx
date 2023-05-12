import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout:FC = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;