import '../styles/NavBar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: '/calculator', text: 'Calculator' },
  { path: '/quote', text: 'Quote' },
];

const NavBar = () => (
  <header className="navbar-container">
    <nav className="nav-bar">
      <h1>Math Magicians</h1>
      <ul className="nav-link">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.path}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
