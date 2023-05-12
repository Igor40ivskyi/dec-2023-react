import React, {FC} from 'react';
import {IComment} from "../../interfaces/comment.interface";

import './Comment.css'
import {Outlet, useNavigate} from "react-router-dom";

interface IProps{
    comment: IComment;
}

const Comment: FC<IProps> = ({comment}) => {

    const {id, name, postId, email, body} = comment;

    const navigate = useNavigate();


    return (
        <div>
            <div className={'singleCommentFullInfo'}>
                <div>id - {id}</div>
                <div>name - {name}</div>
                <div>postId - {postId}</div>
                <div>email - {email}</div>
                <div>body - {body}</div>
            </div>
            <button onClick={() => navigate(`post/${postId}`,)}>get Post</button>
        </div>
    );
};

export default Comment;