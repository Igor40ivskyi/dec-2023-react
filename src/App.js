import {Users} from "./components/Users";
import {useState} from "react";
import Posts from "./components/Posts";

function App() {

    const [flag,setFlag] = useState(true);

    return (
        <div className="App">
            {flag && <Posts flag={flag}/>}
            <button onClick={() => setFlag(prev => !prev)}>hide</button>
        </div>
    );
}

export default App;
