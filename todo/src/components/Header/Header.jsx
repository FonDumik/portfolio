import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            TodoApp
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Список задач</Link>
            </li>
            <li>
              <Link to="/info">Информация</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
