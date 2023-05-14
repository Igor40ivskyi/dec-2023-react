import A from "./components/A";
import {createContext} from "react";

export const MyContext = createContext('defaultValue');

function App() {

    const value = 'XXXXX';

    return (
        <div className="App">
            App component
            <MyContext.Provider value={'DDDDD'}>
                <A value={value}/>
            </MyContext.Provider>
            <MyContext.Consumer>
                {
                    (value) => {
                        return <h2>{value}</h2>
                    }
                }
            </MyContext.Consumer>
        </div>
    );
}

export default App;
