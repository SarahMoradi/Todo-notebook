import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (value) => {
    onUpdateTodo({id: edit.id, text: value , isCompleted: edit.isCompleted});
    setEdit({ id: null, text: "", isCompleted: false })
  };
  
  const renderedTodos = () => {
    if (todos.length === 0) return <p>Add some Todos</p>;
    return todos.map((todo) => {
      return (
        <Todo
          todo={todo}
          key={todo.id}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm edit={edit} addTodoHandler={editTodo} />
      ) : (
        renderedTodos()
      )}
    </div>
  );
};

export default TodoList;
