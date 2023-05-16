import React, {useContext, useEffect, useReducer} from 'react';
import {useForm} from "react-hook-form";

import './CatDogForm.css';
import {CatDogContext} from "../../index";

const reducer = (state, action) => {

    switch (action.type) {
        case 'FULL_SAVE':
            return {...state,cats:[...state.cats,action.payload.catInput],dogs:[...state.dogs,action.payload.dogInput]};
        case 'CAT_SAVE':
            return {...state, cats: [...state.cats, action.payload]};
        case 'DOG_SAVE':
            return {...state, dogs: [...state.dogs, action.payload]}
        default:
            return {...state};
    }


};

const CatDogForm = ({setState}) => {

    const {register, reset, handleSubmit} = useForm();

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    useEffect(() => {
        setState(state);
    },[state]);

    const save = (value) => {
        if (value.catInput && value.dogInput) {
            dispatch({type: 'FULL_SAVE', payload: value})
        }

        if (value.catInput && !value.dogInput) {
            dispatch({type:'CAT_SAVE', payload: value.catInput})
        }
        if (!value.catInput && value.dogInput) {
            dispatch({type:'DOG_SAVE', payload: value.dogInput})
        }

        reset();
    };

    return (
            <form onSubmit={handleSubmit(save)}>
                <div className={'inputsWrap'}>
                    <div className={'inputWrap'}>
                        <input type="text" placeholder={'cat'} {...register('catInput')}/>
                        <button>save</button>
                    </div>

                    <div className={'inputWrap'}>
                        <input type="text" placeholder={'dog'} {...register('dogInput')}/>
                        <button>save</button>
                    </div>
                </div>
            </form>
    );
};

export default CatDogForm;