import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <ul className="nav-personals">
        <li>
          <a href="https://github.com/Logan-Alvarez" target={"_blank"}>
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/logan-alvarez/"
            target={"_blank"}
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
