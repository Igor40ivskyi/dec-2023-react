import React, {useEffect, useState} from 'react';
import {mainService} from "../../services/mainService";
import Todo from "../Todo/Todo";

const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        mainService.getAllTodos().then(value => value.data).then(value => setTodos(value));
    },[]);

    return (
        <div style={{border:'2px solid black'}}>
            <h3>All todos</h3>
            {todos.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};

export default Todos;