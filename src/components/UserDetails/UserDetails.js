import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const UserDetails = () => {
    const {state} = useLocation();

    return (
        <div>
            C UserDetails
            <hr/>
            {JSON.stringify(state)}
        </div>
    );
};

export default UserDetails;