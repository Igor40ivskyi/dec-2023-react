import React from 'react';

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <div>{id} - {title}</div>
        </div>
    );
};

export default Post;