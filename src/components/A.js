import React from 'react';
import B from "./B";
import {MyContext} from "../App";

const A = ({value}) => {

    return (
        <div>
            A component
            <MyContext.Consumer>
                {
                    (value) => {
                        return <h2>{value}</h2>
                    }
                }
            </MyContext.Consumer>
            <B value={value}/>
        </div>
    );
};

export default A;