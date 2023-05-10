import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const {id, postId, email, name, body} = comment;

    let navigate = useNavigate();

    return (
        <div style={{margin: 10, fontSize: 18}}>

            <div>id -{id}</div>
            <div>postId -{postId}</div>
            <div>email -{email}</div>
            <div>name -{name}</div>
            <div>body -{body}</div>

            <button onClick={() => {
                navigate('relatedpost/'+postId.toString())
            }}>get related post
            </button>
        </div>
    );
};

export default Comment;