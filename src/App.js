import {useSelector} from "react-redux";
import {One} from "./components/One";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {PostPage} from "./pages/PostPage";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={<PostPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
