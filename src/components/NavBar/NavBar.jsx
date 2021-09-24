import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import UserWidget from "../UserWidget/UserWidget.jsx";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar d-flex align-content-center sticky-top">
      <Link id="mainLogo" to='/'>
        <h1>VINTAGE <span>JERSEYS</span></h1>
      </Link>

      <ul className="d-flex main-nav-items">
        <Link to='/category/national_teams'><li className="nav-item">NATIONS</li></Link>
        <Link to='/category/primera_division_argentina'><li className="nav-item">PRIMERA ARGENTINA</li></Link>
        <Link to='/category/premier_league'><li className="nav-item">PREMIER LEAGUE</li></Link>
        <Link to='/category/la_liga'><li className="nav-item">LA LIGA</li></Link>
        <Link to='/category/serie_a'><li className="nav-item">SERIE A</li></Link>
      </ul>

      <div className="d-flex nav-buttons">
        <Link to='/cart'><CartWidget /></Link>
        <UserWidget />
      </div>
    </nav>
  );
};

export default NavBar;
