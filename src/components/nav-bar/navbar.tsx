import DateTime from "./DateTime";
import "./navbar.css";

function NavBar() {
  return (
    <div className="container">
      <div className="content">
        <div>Mac-eco-env</div>
        <DateTime />
      </div>
    </div>
  );
}

export default NavBar;
