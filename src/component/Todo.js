const Todo = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button onClick={onEdit} className="btn">Edit</button>
        <button onClick={onComplete} className="btn completedButton">Complete</button>
        <button onClick={onDelete} className="btn remove">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
