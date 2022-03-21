import '../App.css'

import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  console.log(props.edit, "from Form");

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
        <div className="formControl">
          <input
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder={props.edit ? "Update Todo..." : "Add New Todo..."}
          />
          <button
          className={`btn ${props.edit ? "update" : "add-btn"}`}
          type="submit">{props.edit ? "Update" : "Add"}</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
