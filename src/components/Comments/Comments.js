import React from 'react';
import {useSelector} from "react-redux";
import Comment from "../Comment/Comment";

const Comments = () => {

    const comments = useSelector(state => state.comments);

    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;