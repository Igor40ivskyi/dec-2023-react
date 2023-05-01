import Comments from "./components/Comments/Comments";
import FullComment from "./components/FullComment/FullComment";
import {useState} from "react";
import './App.css';


function App() {

    let [item, setItem] = useState(null);

    const lift = (item) => {
        setItem(item);
    };

    return (
        <div className="App">
            {/*<IncrementDecrement/>*/}
            <div className="leftSide">
                <Comments lift={lift}/>
            </div>
            {item &&
                <div className="rightSide">
                <FullComment comment={item}/>
            </div>}
        </div>
    );
}

export default App;
