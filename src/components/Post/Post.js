import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services/postsService";

const Post = () => {

    const {postId} = useParams();

    let [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(value => value.data).then(value => setPost(value));
    }, [postId]);


    return (
        <div>
            {post &&
                <div>
                    <div>id - {post.id}</div>
                    <div>title - {post.title}</div>
                    <div>body - {post.body}</div>
                </div>
            }
        </div>
    );
};

export default Post;