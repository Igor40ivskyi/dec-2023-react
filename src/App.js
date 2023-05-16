
import First from "./Firts/First";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "./index";

function App() {

    const [users,setUsers] = useState(null);

    const value = useContext(MyContext);
    console.log(users);

    useEffect(() => {

        setUsers(value.users);
    }, []);

    return (
        <div className="App">
            <First/>


            {/*<Button bgColor={'black'} color={'snow'} styles={{color:'white',margin:'100px'}}>*/}
            {/*    save*/}
            {/*</Button>*/}
        </div>
    );
}

export default App;
