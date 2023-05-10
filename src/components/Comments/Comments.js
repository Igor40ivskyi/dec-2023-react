import React, {useEffect, useState} from 'react';
import {mainService} from "../../services/mainService";
import Comment from "../Comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        mainService.getAllComments().then(value => value.data).then(value => setComments(value));
    },[]);

    return (
        <div style={{border: '2px solid black',display:'flex'}}>
            <div style={{width:'45%'}}>
                <h3>All comments</h3>
                {comments.map(value => <Comment key={value.id} comment={value}/>)}
            </div>
            <div style={{width:'45%',marginLeft:40}}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Comments;