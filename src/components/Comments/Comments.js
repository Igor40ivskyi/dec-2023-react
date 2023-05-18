import {Component} from "react";
import {Comment} from "../Comment/Comment";
import {commentService} from "../../services/comment.service";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(value=> <Comment key={value.id} comment={value}/> )}
            </div>
        )
    }
}

export {
    Comments
};
