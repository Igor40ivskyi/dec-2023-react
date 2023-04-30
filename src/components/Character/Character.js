import React from 'react';

const Character = ({character}) => {

    const {name, status, species, type, gender, image} = character;

    return (
        <div style={{display: "flex",margin:30}}>
            <div>
                <img style={{width: 200, height: 300}} src={image} alt={name}/>
            </div>

            <div style={{marginLeft:20,fontSize:20,fontFamily:"Arial"}}>
                <div>name - {name}</div>
                <div>status - {status}</div>
                <div>species - {species}</div>
                <div>type - {type}</div>
                <div>gender - {gender}</div>

            </div>


        </div>
    );
};

export default Character;