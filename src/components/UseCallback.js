import {Todos} from "./Todos";
import {useCallback, useState} from "react";

const UseCallback = () => {

    const [todos,setTodos] = useState(['newTodo']);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        setTodos(prevState => [...prevState, 'newTodo']);
    },[]);

    const a = 'xxx';

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}/>

            <div>Count: {count}</div>
            <button onClick={() => setCount(prevState => ++prevState)}>inc</button>

        </div>
    );
};

export {UseCallback};