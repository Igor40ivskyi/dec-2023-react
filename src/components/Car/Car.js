import React, {useContext, useEffect} from 'react';
import {MyContext} from "../../hoc/Provider";

const Car = () => {

    const {cars} = useContext(MyContext);

    useEffect(() => {
        const [state, dispatch] = cars;
        console.log(state);
    }, []);



    return (
        <div>
            CAR
        </div>
    );
};

export default Car;