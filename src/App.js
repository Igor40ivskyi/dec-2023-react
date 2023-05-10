import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components/Todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import Post from "./components/Post/Post";
import Test from "./components/Test";

function App() {
    return (
        <div className="App">
            <div>
                <div><Link to={'/todos'}>TODOS</Link></div>
                <div><Link to={'/albums'}>ALBUMS</Link></div>
                <div><Link to={'/comments'}>COMMENTS</Link></div>
            </div>

            <div>
                <Routes>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}>
                        <Route path={'relatedpost/:id'} element={<Post/>}>
                            <Route path={':xxx'} element={<Test/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
            </div>
    );

}

export default App;
