import { useEffect, useState } from "react";

import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState([])
  
  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    //clone
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    console.log(selectedTodo);
  };
  const deleteTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };
  const updateTodo = (edit) => {
    const index = todos.findIndex((item) => item.id === edit.id);
    //clone
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = edit.text;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    console.log(selectedTodo);
  };
  const filterTodos = (status) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="container">
      <Header
        filterTodos={filterTodos}
        status={status}
        setStatus={setStatus}
        uncompleted={todos.filter((t) => t.isCompleted !== true).length}
      />
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
