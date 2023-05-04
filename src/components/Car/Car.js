import React from 'react';

const Car = ({car,setCarForUpdate}) => {

    const {id, brand, year, price} = car;

    return (
        <div>
            <div>id :{id}</div>
            <div>brand :{brand}</div>
            <div>year :{year}</div>
            <div>price :{price}</div>

            <button onClick={() => setCarForUpdate(car)}>update</button>

        </div>
    );
};

export default Car;