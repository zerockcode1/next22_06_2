import React from 'react';
import TodoPagination from "./TodoPagination";

const TodoList = ({todos}) => {
    return (
        <ul>
            {todos.map(({tno,title,dueDate,writer}) => <li key={tno}>{title}</li>)}
        </ul>

    );
};

export default TodoList;