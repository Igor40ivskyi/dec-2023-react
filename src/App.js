import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import TodoPage from "./pages/TodoPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import Post from "./components/Post/Post";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'todos'}/>}/>
                <Route path={'todos'} element={<TodoPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Post/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
