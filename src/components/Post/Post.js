import React, {useState} from 'react';

import './Post.css';

const Post = ({post}) => {

    let [state, setState] = useState(false);

    const {id, title,userId,body} = post;
    console.log(post);
    return (
        <div className="postBlock">
            <div>id - {id}</div>
            <div>title - {title}</div>

            <button onClick={() => {
                setState(prev => !prev);
            }}>details
            </button>

            <hr/>

            {state &&
                <div>
                    <div>id -{id} </div>
                    <div>title -{title} </div>
                    <div>userId -{userId} </div>
                    <div>body -{body} </div>
                </div>
            }

            <hr/>
        </div>
    );
};

export default Post;