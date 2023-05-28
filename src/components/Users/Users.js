import {useEffect} from "react";
import {userService} from "../../services/user.service";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const {users} = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        userService.getUsers().then(value => value.data).then(value => dispatch(userActions.setUsers(value)));
    }, [dispatch]);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};