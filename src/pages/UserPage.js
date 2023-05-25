import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {commonService} from "../services/common.service";
import {userActions} from "../redux/slices/userSlice";
import {Users} from "../components/Users";
import {UserInfo} from "../components/UserInfo";
import {useSearchParams} from "react-router-dom";

const UserPage = () => {

    const {user} = useSelector(state => state.user);

    const params = useSearchParams();

    const dispatch = useDispatch();

    console.log(userActions.setAll());

    useEffect(() => {
        commonService.getAllUsers().then(value => value.data).then(value => dispatch(
            {
                type:"userSlice/setAll",
                payload: value,
            }));
    },[dispatch]);

    return (
        <div>
            <Users/>
            {user &&
                <UserInfo/>
            }
        </div>
    );
};

export {UserPage};