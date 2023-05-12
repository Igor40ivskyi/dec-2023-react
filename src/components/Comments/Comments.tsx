import React, {FC, useEffect, useState} from 'react';

import {IComment} from "../../interfaces/comment.interface";
import {unitedService} from "../../services/united.service";
import Comment from "../Comment/Comment";
import './Comments.css'
import {Outlet} from "react-router-dom";

const Comments:FC = () => {

    const [comments,setComments] = useState<IComment[]>([]);

    useEffect(() => {
        unitedService.getAllComments().then(value => value.data).then(value => setComments(value));
    },[]);

    return (
        <div style={{display:'flex'}}>
            <div className={'allCommentsBlock'}>
                {comments.map(value => <Comment key={value.id} comment={value}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export default Comments;