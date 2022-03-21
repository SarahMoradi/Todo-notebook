import "../App.css";

const Header = (props) => {
  return (
    <div className="header-section">
      <p>
        {" "}
        <span>{props.uncompleted}</span>
        {props.uncompleted === 0 ? " Todo" : " Todos"} is in the list !
      </p>
    </div>
  );
};

export default Header;
