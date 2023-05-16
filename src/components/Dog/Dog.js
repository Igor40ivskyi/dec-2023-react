import React from 'react';

const Dog = ({dog}) => {
    return (
        <div>
            {dog}
            <button>delete</button>
        </div>
    );
};

export default Dog;