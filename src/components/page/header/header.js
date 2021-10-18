import "./header.css";

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div className="hr"></div>
    </div>
  );
};

export default Header;
