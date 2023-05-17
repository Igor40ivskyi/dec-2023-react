import React, {useContext, useEffect, useReducer} from 'react';
import {useForm} from "react-hook-form";

import './CatDogForm.css';
import {CatDogContext} from "../../index";

const reducer = (state, action) => {

    switch (action.type) {
        case 'FULL_SAVE':
            return {...state,cats:[...state.cats,{id:state.cats[state.cats.length -1].id + 1,name:action.payload.catInput}],
                dogs:[...state.dogs,{id:state.dogs[state.dogs.length -1].id + 1,name:action.payload.dogInput}]};
        case 'CAT_SAVE':
            return {...state,cats:[...state.cats,{id:state.cats[state.cats.length -1].id + 1,name:action.payload}]};
        case 'DOG_SAVE':
            return {
                ...state,
                dogs: [...state.dogs, {id: state.dogs[state.dogs.length - 1].id + 1, name: action.payload}]
            };
        case 'CAT_DEL':
            let index1 = state.cats.findIndex(value => value.id === action.payload);
            state.cats.splice(index1, 1);
            return {...state};

        case 'DOG_DEL':
            let index2 = state.dogs.findIndex(value => value.id === action.payload);
            state.dogs.splice(index2, 1);
            return {...state};

        default:
            return {...state};

    }


};

const CatDogForm = ({setState,catIdForDel,dogIdForDel}) => {

    const {register, reset, handleSubmit} = useForm();

    const [state, dispatch] = useReducer(reducer, {cats: [{id:0, name: null}], dogs: [{id:0,name:null}]});

    console.log(state);

    useEffect(() => {
        setState(state);
    },[state]);

    useEffect(() => {
        catIdForDel &&
        dispatch({type: 'CAT_DEL', payload: catIdForDel});
        dogIdForDel &&
        dispatch({type:'DOG_DEL', payload: dogIdForDel})
    },[catIdForDel,dogIdForDel]);


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