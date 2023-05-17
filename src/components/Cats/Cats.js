import React from 'react';
import Cat from "../Cat/Cat";

const Cats = ({state,setCatIdForDel}) => {
    return (
        <div style={{width:'45%',backgroundColor:'silver',textAlign:'center',fontSize:25,fontFamily:'Bahnschrift'}}>
            CATS
            {state && state.cats.map((value, index) => <Cat key={index} cat={value} setCatIdForDel={setCatIdForDel}/>)}
        </div>
    );
};

export default Cats;