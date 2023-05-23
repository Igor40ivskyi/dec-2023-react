import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/carsService";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import './Cars.css'
import {useDispatch, useSelector} from "react-redux";
import {baseActionCreator} from "../../redux/actions/base.action-creator";

const Cars = () => {

    const state = useSelector(state => state);

    const {cars, trigger} = state;

    const dispatch = useDispatch();


    useEffect(() => {
        carsService.getAll().then(value => value.data).then(value => dispatch(baseActionCreator.setCars(value)));
    }, [trigger]);

    return (
        <div>
            <div className={'formContainer'}>
                <CarForm/>
            </div>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export default Cars;