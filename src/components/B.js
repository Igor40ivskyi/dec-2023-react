import React from 'react';
import C from "./C";

const B = ({value}) => {
    return (
        <div>
            B component
            <C value={value}/>
        </div>
    );
};

export default B;