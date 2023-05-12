import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'todos'}/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={'post/:id'} element={<PostPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;