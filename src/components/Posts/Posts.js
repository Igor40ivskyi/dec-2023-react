import React from 'react';
import {useSelector} from "react-redux";
import Post from "../Post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.postsReducer);

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;