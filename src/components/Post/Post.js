import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {mainService} from "../../services/mainService";

const Post = () => {

    const {id} = useParams();

    let [post, setPost] = useState([]);

    useEffect(() => {
        mainService.getPostById(id).then(value => value.data).then(value => setPost(value));
    },[id]);

    const {id:postId, title, body, userId} = post;

    const navigate = useNavigate();

    const strings = useParams();
    console.log(strings);
    return (
        <div>
            <h3>Related post</h3>
            <div>postId - {postId}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
            <div>userId - {userId}</div>
            <button onClick={() => {
                navigate('xxx')
            }}>navigate test
            </button>
        </div>
    );
};

export default Post;