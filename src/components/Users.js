import {Component} from "react";
import {userService} from "../services/user.service";
import {User} from "./User";

class Users extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        userService.getAll().then(value => value.data).then(value => this.setState({users: value}));
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.users.map(value => <User key={value.id} user={value}/>)}
            </div>

        );
    }
}

export {
    Users
}