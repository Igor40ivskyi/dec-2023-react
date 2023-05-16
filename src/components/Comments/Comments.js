import {Component} from "react";
import {commonService} from "../../services/common.service";
import {Comment} from "../Comment/Comment";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            comments: [],
        }
    }

    componentDidMount() {
        commonService.getAllComments().then(value => value.data).then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(value=> <Comment key={value.id} comment={value} />)}
            </div>
        )
    }
}

export {
    Comments
};