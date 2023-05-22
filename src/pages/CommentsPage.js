import React, {useEffect} from 'react';
import {commonService} from "../services";
import {useDispatch} from "react-redux";
import {getComments} from "../redux/actions/base.action_creator";
import Comments from "../components/Comments/Comments";

const CommentsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        commonService.getComments().then(value => value.data)
            .then(value => dispatch(getComments(value)));
    },[]);

    return (
        <div>
            <Comments/>
        </div>
    );
};

export default CommentsPage;