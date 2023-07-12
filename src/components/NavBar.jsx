import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: '/calculator', text: 'Calculator' },
  { path: '/quote', text: 'Quote' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <h1 className="logo"><Link to="/">Math Magicians</Link></h1>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
