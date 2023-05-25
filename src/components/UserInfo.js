import {useSelector} from "react-redux";

const UserInfo = () => {

    const {user} = useSelector(state => state.user);

    console.log(user);

    const {id, name, username, email, phone, address: {city}} = user;

    return (
        <div>
            {user && <div>

                <div>id - {id}</div>
                <div>name - {name}</div>
                <div>username - {username}</div>
                <div>email - {email}</div>
                <div>phone - {phone}</div>
                <div>city - {city}</div>
            </div>}
        </div>
    );
};

export {UserInfo};