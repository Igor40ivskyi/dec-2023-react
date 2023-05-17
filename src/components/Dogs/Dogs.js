import React from 'react';
import Dog from "../Dog/Dog";

const Dogs = ({state,setDogIdForDel}) => {
    return (
        <div style={{width:'45%',textAlign:'center',backgroundColor:'lightcoral',minHeight:500,fontFamily:'Bahnschrift',
            fontSize: 25}}>
            DOGS
            {state && state.dogs.map((value, index) => <Dog key={index} dog={value} setDogIdForDel={setDogIdForDel} />)}
        </div>
    );
};

export default Dogs;