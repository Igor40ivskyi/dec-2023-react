import {Component} from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    render() {

        const {id, name, email} = this.props.user;

        return (
            <div>
                <div>id -{id}</div>
                <div>name -{name}</div>
                <div>email -{email}</div>
            </div>
        );
    }
}

export {
    User
};


