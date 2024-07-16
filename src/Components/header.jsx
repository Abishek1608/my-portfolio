import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="col-left">
        <h3>ABISHEK</h3>
      </div>
      <div className="col-right">
        <Link to="/">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Project</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
