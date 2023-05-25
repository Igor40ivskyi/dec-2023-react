import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../redux/slices/userSlice";

const Users = () => {

    const {users} = useSelector(state=>state.user);

    const dispatch = useDispatch();

    return (
        <div>
            {users.map(value => <div key={value.id}> {value.name} <button onClick={()=>dispatch(userActions.setSingle(value))}>GET USER</button> </div>)}
        </div>
    );
};

export {Users};