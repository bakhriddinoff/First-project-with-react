import "./Header.css";
import reactlogo from '../assets/react.svg'
import gitpod from '../assets/gitpod.png'

function Header() {
  return (
    <header className="header container">
      <img className="logo" src={gitpod} alt="Gitpod Logo" />
      <nav>
        <ul>
          <li><a href="#" className="links">Features</a></li>
          <li><a href="#" className="links">Pricing</a></li>
          <li><a href="#" className="links">Blog</a></li>
          <li><a href="#" className="links">Docs</a></li>
          <li><a href="#" className="links">Changelog</a></li>
          <li><a href="#" className="links">We're hiring</a></li>
        </ul>
      </nav>
      <button className="login">Login</button>
    </header>
  );
}

export default Header;
