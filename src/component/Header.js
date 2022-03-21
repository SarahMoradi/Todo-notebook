import "../App.css";

const Header = ({ uncompleted }) => {
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
          </div>
        </>
  );
};

export default Header;
