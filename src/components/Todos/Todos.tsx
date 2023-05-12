import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../../interfaces/todo.interface";
import {unitedService} from "../../services/united.service";
import Todo from "../Todo/Todo";

const Todos: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        unitedService.getAllTodos().then(value => value.data).then(value => setTodos(value));
    }, []);

    return (
        <div>
            {todos.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};

export default Todos;
