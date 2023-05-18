import React, {useReducer} from 'react';
import Cats from "../components/Cats/Cats";
import Dogs from "../components/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            return
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
            <Cats/>
            <Dogs/>
        </div>
    );
};

export default CatDogPage;