import Todo from './Todo'

const TodoList = ({ todos, onComplete ,onDelete }) => {

  const renderedTodos = () => {
    if (todos.length === 0) return <p>Add some Todos</p>;
    return todos.map((todo) => {
      return (
        <Todo todo={todo} key={todo.id} onComplete={()=> onComplete(todo.id)} onDelete={()=>onDelete(todo.id)} />
      );
    });
  };

  return <div>{renderedTodos()}</div>;
};

export default TodoList;
