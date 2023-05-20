import React from 'react';
import {useSelector} from "react-redux";

const AAA = () => {

    const state = useSelector(state => state);

    return (
        <div>
            <h1>{state}</h1>
        </div>
    );
};

export default AAA;