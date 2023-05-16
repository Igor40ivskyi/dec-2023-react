
import CatDogForm from "./components/CatDogForm/CatDogForm";
import {useState} from "react";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

function App() {

    const [state, setState] = useState(null);

    console.log(state);
    return (
        <div className="App">
            <CatDogForm setState={setState}/>
            <hr/>
            <div style={{display:"flex",justifyContent:'space-between'}}>
                <Cats state={state} />
                <Dogs state={state}/>
            </div>
        </div>
    );
}

export default App;
