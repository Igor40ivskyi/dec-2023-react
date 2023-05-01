import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;


    return (
        <div style={{margin:30,fontSize:25}}>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <div>body - {body}</div>
        </div>
    );
};

export default Comment;