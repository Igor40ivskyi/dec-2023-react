import React from 'react';

import './PostsOfChosenUser.css';

const PostsOfChosenUser = ({post}) => {

    return (
        <div className="postBlock">
            {post.title}
        </div>
    );
};

export default PostsOfChosenUser;