import React from 'react';

const Cat = ({cat,setCatIdForDel}) => {
    console.log(cat);
    let {id, name} = cat;

    return (
        <div>
            {name && <div>{id} {name}

                <button onClick={() => setCatIdForDel(id)}>delete</button>
            </div>}
        </div>
    );
};

export default Cat;