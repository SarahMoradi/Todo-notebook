import Todo from './Todo'

const TodoList = ({ todos }) => {
  const renderedTodos = () => {
    if (todos.length === 0) return <p>Add some Todos</p>;
    return todos.map((todo) => {
      return (
        <Todo todo={todo} key={todo.id}  />
      );
    });
  };

  return <div>{renderedTodos()}</div>;
};

export default TodoList;
