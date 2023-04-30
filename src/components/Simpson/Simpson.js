import React from 'react';

const Simpson = ({simpson}) => {
    const {name, image} = simpson;
    return (
        <div>
            <div>name - {name}</div>
            <div>
                <img style={{width:150, height: 150}} src={image} alt={name}/>
            </div>
        </div>
    );
};

export default Simpson;