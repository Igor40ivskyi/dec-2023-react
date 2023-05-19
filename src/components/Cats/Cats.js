import React from 'react';
import {useForm} from "react-hook-form";

const Cats = ({stateDispatch}) => {

    const {register,handleSubmit,reset} = useForm();

    const [{cats}, dispatch] = stateDispatch;
    console.log(cats);

    const saveCat = (cat) => {
        dispatch({type:'ADD_CAT', payload: cat})
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>save</button>
            </form>
            {cats.map(value=> <div key={value.id}>{value.name}</div>)}
        </div>
    );
};

export default Cats;