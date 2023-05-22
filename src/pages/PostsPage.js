import React, {useEffect} from 'react';
import {commonService} from "../services";
import {useDispatch} from "react-redux";
import {getPosts} from "../redux/actions/base.action_creator";
import Posts from "../components/Posts/Posts";

const PostsPage = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        commonService.getPosts().then(value => value.data)
            .then(value => dispatch(getPosts(value)));
    },[]);

    return (
        <div>
            <Posts/>
        </div>
    );
};

export default PostsPage;