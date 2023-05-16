import {Component} from "react";
import {commonService} from "../../services/common.service";
import {Post} from "../Post/Post";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        commonService.getAllPosts().then(value => value.data).then(value => this.setState({users: value}))
    }

    render() {
        return (
            <div>
                {this.state.users.map(value => <Post key={value.id} post={value}/>)}
            </div>
        );
    }
}

export {
    Posts
}