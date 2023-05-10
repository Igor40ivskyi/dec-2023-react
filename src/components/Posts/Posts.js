import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {Outlet} from "react-router-dom";

const Posts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value));
    },[]);

    return (
        <div>
            <div>
                <h4>post details view</h4>
                <Outlet/>
            </div>

            <div>
                <h3>All posts</h3>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>

        </div>
    );
};

export default Posts;