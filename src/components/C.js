import React from 'react';
import {MyContext} from "../App";


const C = ({value}) => {
    return (
        <div>
            C component
            <hr/>
            {value}
            <hr/>
            <MyContext.Consumer>
                {(value) => {
                    return <h3>{value}</h3>;
                }}
            </MyContext.Consumer>
            <button onClick={() => {
                {

                    <MyContext.Provider value={'SSSSS'}>

                    </MyContext.Provider>
                }
            }}>TTT
            </button>
        </div>
    );
};

export default C;