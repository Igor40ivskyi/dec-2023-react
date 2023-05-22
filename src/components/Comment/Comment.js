import React from 'react';

const Comment = ({comment}) => {

    const {id, name} = comment;

    return (
        <div>
            <div>{id} --- {name}</div>
        </div>
    );
};

export default Comment;