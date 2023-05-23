import React from 'react';
import './Car.css'
import {carsService} from "../../services/carsService";
import {useDispatch} from "react-redux";
import {baseActionCreator} from "../../redux/actions/base.action-creator";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const delCar = async () => {
        await carsService.deleteById(id);
        dispatch(baseActionCreator.setTrigger());
    };

    return (
        <div className={'carCard'}>
            <div className={'cardItem'}>id :{id}</div>
            <div className={'cardItem'}>brand :{brand}</div>
            <div className={'cardItem'}>price :{price}</div>
            <div className={'cardItem'}>year :{year}</div>

            <button onClick={() => dispatch(baseActionCreator.setCarForUpdate(car))}>update</button>
            <button onClick={()=>delCar()}>del</button>
        </div>
    );
};

export default Car;