import Posts from "./components/Posts/Posts";
import Launches from "./components/Launches/Launches";
import Users from "./components/Users/Users";
import {useState} from "react";
import PostsOfChosenUser from "./components/PostsOfChosenUser/PostsOfChosenUser";

import './App.css';

function App() {

    let [posts, setPosts] = useState([]);

    const lift = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value));
    };

    return (
        <div className="App">
            {/*<Posts/>*/}

            {/*<Launches/>*/}


            <Users lift={lift}/>
            <div className="chosenUserPosts">
                {posts.map(value => <PostsOfChosenUser key={value.id} post={value}/>)}
            </div>

        </div>
    );
}

export default App;
