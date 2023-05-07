import React, {FC} from 'react';
import {IComment} from "../../interfaces/commentInterface";
import Comment from "../Comment/Comment";

interface IProps {
    comments: IComment[];
}

const Comments:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(value=> <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;