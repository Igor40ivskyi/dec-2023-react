import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../interfaces/commentInterface";
import {commentService} from "../services/commentService";
import Comments from "../components/Comments/Comments";
import CommentForm from "../components/CommentForm/CommentForm";

interface IProps {

}

const CommentPage:FC<IProps> = () => {

    const [comments,setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(value => setComments(value));
    }, []);

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentPage;