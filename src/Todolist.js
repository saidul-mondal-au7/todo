import React from 'react';
import Todo from './Todo';

// export default function Todolist({ todos, toggleTodo }) {
//     return (
//         todos.map(todo => {
//             return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
//         })
//     )
// }


const Todolist = ({ todos, toggleTodo }) => (
    todos.map(todo => <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} /> )
)

export default Todolist;