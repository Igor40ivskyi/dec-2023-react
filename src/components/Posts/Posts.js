import {Component} from "react";
import {Post} from "../Post/Post";
import {postService} from "../../services/post.service";

class Posts extends Component {
    constructor(props) {
        super(props);
    this.state = {posts: []}
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts: value}));
    }

    render() {
        return (
            <div>
                {this.state.posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
        );
    }
}

export {
    Posts
};

