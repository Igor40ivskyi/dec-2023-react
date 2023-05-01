import React from 'react';
import './Post.css';

const Post = ({post,lift}) => {

    const {id, title} = post;

    return (
        <div className="singlePostContainer">
            <div>id - {id}</div>
            <div>title - {title}</div>

            <button onClick={() => {
                lift(post);
            }}>details
            </button>
        </div>
    );
};

export default Post;