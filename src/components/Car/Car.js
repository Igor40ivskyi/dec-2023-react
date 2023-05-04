import React from 'react';
import './Car.css'

const Car = ({car,setUpdateCar}) => {
    const {id, brand, price, year} = car;

    return (
        <div className={'carCard'}>
            <div className={'cardItem'}>id :{id}</div>
            <div className={'cardItem'}>brand :{brand}</div>
            <div className={'cardItem'}>price :{price}</div>
            <div className={'cardItem'}>year :{year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
        </div>
    );
};

export default Car;