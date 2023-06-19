import {LoginForm} from "../components";
import {useSearchParams} from "react-router-dom";

const LoginPage = () => {
    const [query, setQuery] = useSearchParams();

    return (
        <div>
            {query.get('expSession')&&<h1>Session expired... please login again.</h1>}
            <LoginForm/>
        </div>
    );
};

export {LoginPage};