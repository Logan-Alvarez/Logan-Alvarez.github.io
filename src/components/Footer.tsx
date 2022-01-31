import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <ul>
        <li>
          <a href="https://github.com/Logan-Alvarez" target={"_blank"}>
            <img src="github.svg" alt="Github logo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/logan-alvarez/"
            target={"_blank"}
          >
            <img src="linkedIn.svg" alt="LinkedIn Logo" />
          </a>
        </li>
        <li>
          <a href="" target={"_blank"}>
            <img src="" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
