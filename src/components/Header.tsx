import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <ul className="nav-links">
        <li>
          <Link to={"/about"}>
            <h2>About</h2>
          </Link>
        </li>
        <li>
          <Link to={"/tools"}>
            <h2>Tools</h2>
          </Link>
        </li>
        <li>
          <Link to={"/works"}>
            <h2>Works</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
