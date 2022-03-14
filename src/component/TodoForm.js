import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    props.addTodoHandler(input);
    if (!input) {
      alert("Enter Todo Before!");
      return;
    }
    e.preventDefault();
    setInput(" ");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;
