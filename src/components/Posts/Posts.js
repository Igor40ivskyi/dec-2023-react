import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "../Post/Post";

const Posts = () => {

    let [posts,setPosts] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts').then(value => value.data).then(value => setPosts(value));
    }, []);

    return (
        <div>
            <div>
                {
                    posts.map(value => <Post key={value.id} post={value}/>)
                }
            </div>
        </div>
    );
};

export default Posts;