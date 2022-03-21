import "../App.css";

const Header = ({ uncompleted, filterTodos, status, setStatus}) => {
  
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value)
  };

  if (!uncompleted)
    return (
      <div className="header-section no-task">
        No task is available to be done !
      </div>
    );
  return (
    <>
      <div className="header-section">
        <p>
          {" "}
          <span>{uncompleted}</span>
          {uncompleted === 0 ? " Todo" : " Todos"} is in the list !
        </p>
        <div>
          <select onChange={changeHandler} value={status}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
