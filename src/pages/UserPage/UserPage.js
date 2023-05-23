import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {baseActionCreator} from "../../redux/actions/base.action_creator";

import {commonService} from "../../services/common.service";
import Users from "../../components/Users/Users";
import UserInfo from "../../components/UserInfo/UserInfo";
import './UserPage.css'

const userThunk = () => async (dispatch) => {
    dispatch(baseActionCreator.setUserTrigger(true));
    const response = await commonService.getAllUsers().then(value => value.data);
    dispatch(baseActionCreator.setUsers(response));
    dispatch(baseActionCreator.setUserTrigger(false));
};

const UserPage = () => {

    const dispatch = useDispatch();

    const {userInfo} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userThunk());
    },[dispatch]);

    return (
        <div className={'mainBlock'}>
            <div>
                <Users/>
            </div>

            {userInfo &&
                <div>
                    <UserInfo userInfo={userInfo}/>
                </div>}
        </div>
    );
};

export default UserPage;