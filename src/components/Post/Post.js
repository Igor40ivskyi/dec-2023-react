import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate();

    return (
        <div>
            {post.id} {post.title}
            <button onClick={() => {
                navigate(post.id.toString());
            }}>details of post
            </button>
        </div>
    );
};

export default Post;