import "./recent.css";
import Header from "../../header/header";
const Recent = () => {
  return (
    <div className="header">
      <div className="grid">
        <div clasName="col2" style={{ gridColumn: 2 }}>
          <Header name="Recent" />
        </div>
      </div>
    </div>
  );
};

export default Recent;
