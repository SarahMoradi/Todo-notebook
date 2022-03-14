import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodoHandler = (input) => {
        const newTodo = {
            id: Math.floor(Math.random()*1000),
            text: input,
            isCompleted: false
        }
        setTodos([...todos, newTodo])
    }
    
  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList />
    </div>
  );
};

export default TodoApp;
