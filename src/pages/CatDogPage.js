import React, {useReducer} from 'react';
import Cats from "../components/Cats/Cats";
import Dogs from "../components/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]}
        case 'ADD_DOG':
            return
        case 'DEL_CAT':
            return
        case 'DEL_DOG':
            return
        default :
            return state;
    }
};

const CatDogPage = () => {

    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <Cats stateDispatch={stateDispatch}/>
            <Dogs/>
        </div>
    );
};

export default CatDogPage;