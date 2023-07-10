import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <div className="wrapper">
    <NavBar />
    <Outlet />
  </div>
);

export default Layout;
