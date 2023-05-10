import React from 'react';
import {useParams} from "react-router-dom";

const Test = () => {

    const params = useParams();
    console.log(params);

    return (
        <div>
            C Test
        </div>
    );
};

export default Test;