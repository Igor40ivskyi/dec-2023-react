import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todosService";
import Todo from "../Todo/Todo";

const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(value => value.data).then(value => setTodos(value));
    }, []);

    console.log(todos);
    return (
        <div>
            {todos.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};

export default Todos;