import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import './Posts.css';

const Posts = () => {

    let [posts, setPosts] = useState([]);

    let [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value));
    },[]);

    const postDetails = (postInfo) => {
        setPostInfo(postInfo);
    };

    return (
        <div className="main">

            <div className="postsList">
                {posts.map(value => <Post key={value.id} post={value} lift={postDetails}/>)}
            </div>

            {postInfo
                &&
                <div className="singlePostInfo">
                <div>userId - {postInfo.userId}</div>
                <div>id - {postInfo.id}</div>
                <div>title - {postInfo.title}</div>
                <div>body - {postInfo.body}</div>
            </div>}
        </div>
    );
};

export default Posts;