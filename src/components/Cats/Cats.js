import React from 'react';
import {useForm} from "react-hook-form";

const Cats = ({stateDispatch}) => {

    const {register,handleSubmit,reset} = useForm();

    const [{cats}, dispatch] = stateDispatch;

    const saveCat = (cat) => {
        dispatch({type:'ADD_CAT', payload: cat})
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input style={{fontSize:22}} type="text" placeholder={'cat'} {...register('name')}/>
                <button style={{fontSize:22}} >save</button>
            </form>
            {cats.map(value=> <div style={{fontSize:20}} key={value.id}>{value.name}
            <button style={{fontSize:20}} onClick={()=> dispatch({type:'DEL_CAT',payload:value.id})} >del</button>
            </div>)}
        </div>
    );
};

export default Cats;