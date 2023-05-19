import React from 'react';
import CarForm from "../components/CarForm/CarForm";
import Cars from "../components/Cars/Cars";

const CarPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default CarPage;