import React from 'react';

const Dog = ({dog,setDogIdForDel}) => {

    const {id, name} = dog;

    return (
        <div>
            {name && <div>{id} {name}

                <button onClick={() => setDogIdForDel(id)}>delete</button>
            </div>}
        </div>
    );
};

export default Dog;