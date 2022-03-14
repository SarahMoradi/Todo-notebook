import Todo from './Todo'
import TodoForm from './TodoForm';
import { useState } from 'react';

const TodoList = ({ todos, onComplete ,onDelete}) => {

    const [edit, setEdit] = useState({id: null, text:"", isCompleted: false})
  const renderedTodos = () => {
    if (todos.length === 0) return <p>Add some Todos</p>;
    return todos.map((todo) => {
      return (
        <Todo todo={todo} key={todo.id} onComplete={()=> onComplete(todo.id)} onDelete={()=>onDelete(todo.id)} onEdit={()=>setEdit(todo)} />
      );
    });
  };

  return <div>{edit.id ? <TodoForm/> : renderedTodos()}</div>;
};

export default TodoList;
