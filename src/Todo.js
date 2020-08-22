import React from 'react';



const Todo = ( {todo,toggleTodo} ) => {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div>
        <label>
          <input type='checkbox' checked={todo.complete} onChange={handleTodoClick} />
          {todo.name}
        </label>
     </div>
    )
}

export default Todo;

// export default function Todo({ todo, toggleTodo }) {
//     function handleTodoClick() {
//         toggleTodo(todo.id)
//     }
//     return (
//         <div>
//             <label>
//                 <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}/>
//                 {todo.name}
//             </label>
//         </div>
//     )
// }
    
