import React from 'react';
import {useForm} from "react-hook-form";

const Dogs = ({stateDispatch}) => {

    const {register,handleSubmit,reset} = useForm();

    const [{dogs}, dispatch] = stateDispatch;

    const saveDog = (dog) => {
        dispatch({type:'ADD_DOG', payload: dog})
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input style={{fontSize:22}} type="text" placeholder={'dog'} {...register('name')}/>
                <button style={{fontSize:22}} >save</button>
            </form>

                {dogs.map(dog=> <div style={{fontSize:20}} key={dog.id}>{dog.name}
                    <button style={{fontSize:20}} onClick={()=> dispatch({type:'DEL_DOG',payload:dog.id})}>del</button></div>)}
        </div>
    );
};

export default Dogs;