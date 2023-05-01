import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

const Comments = ({lift}) => {

    let [comments, setComments] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });

    }, []);


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} lift={lift}/>)}
        </div>
    );
};

export default Comments;