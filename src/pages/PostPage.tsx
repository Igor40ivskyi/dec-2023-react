import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../interfaces/post.interface";
import {unitedService} from "../services/united.service";
import Post from "../components/Post/Post";

const PostPage:FC = () => {

    const {id} = useParams();

    const [post,setPost] = useState<IPost>(null);

    useEffect(() => {
        unitedService.getPostById(id).then(value => value.data).then(value => setPost(value));
    }, [id]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default PostPage;