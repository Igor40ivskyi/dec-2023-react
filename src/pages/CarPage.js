import React, {useContext} from 'react';
import Cars from "../components/Cars/Cars";
import {MyContext} from "../hoc/Provider";

const CarPage = () => {

    const {cars} = useContext(MyContext);

    const [state, dispatch] = cars;

    dispatch({type: 'XXX'})

    return (
        <div>
            CARPAGE
            <Cars/>
        </div>
    );
};

export default CarPage;