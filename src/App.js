
import CatDogForm from "./components/CatDogForm/CatDogForm";
import {useState} from "react";
import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

function App() {

    const [state, setState] = useState(null);

    console.log(state);

    const [catIdForDel, setCatIdForDel] = useState(null);


    const [dogIdForDel, setDogIdForDel] = useState(null);


    return (
        <div className="App">
            <CatDogForm setState={setState} catIdForDel={catIdForDel} dogIdForDel={dogIdForDel}/>
            <hr/>
            <div style={{display:"flex",justifyContent:'space-between'}}>
                <Cats state={state} setCatIdForDel={setCatIdForDel}/>
                <Dogs state={state} setDogIdForDel={setDogIdForDel}/>
            </div>
        </div>
    );
}

export default App;
