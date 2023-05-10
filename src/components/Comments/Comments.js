import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services/commentsService";
import Comment from "../Comment/Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments(value));
    },[]);

    return (
        <div>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;