import React from 'react';
import './Car.css'
import {axiosService} from "../../services/axiosService";
import {carsService} from "../../services/carsService";

const Car = ({car,setUpdateCar,setReloadAfterCreate}) => {
    const {id, brand, price, year} = car;

    const delCar = async () => {
        const res = await carsService.deleteById(id);
        console.log(res);
        setReloadAfterCreate(prev => !prev);
    };

    return (
        <div className={'carCard'}>
            <div className={'cardItem'}>id :{id}</div>
            <div className={'cardItem'}>brand :{brand}</div>
            <div className={'cardItem'}>price :{price}</div>
            <div className={'cardItem'}>year :{year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={()=>delCar()}>del</button>
        </div>
    );
};

export default Car;