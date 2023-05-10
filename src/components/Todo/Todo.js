import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            <div>{id} {title}</div>
        </div>
    );
};

export default Todo;