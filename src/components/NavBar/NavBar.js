import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.js";
import UserWidget from "../UserWidget/UserWidget";


const NavBar = () => {
  return (
    <nav className="navbar d-flex align-content-center">
      <a id="mainLogo" href="#">
        <h1>VINTAGE <span>JERSEYS</span></h1>
      </a>

      <ul className="d-flex main-nav-items">
        <li className="nav-item"><a href="#">HOME</a></li>
        <li className="nav-item"><a href="#">ABOUT</a></li>
        <li className="nav-item"><a href="#">SHOP</a></li>
        <li className="nav-item"><a href="#">CONTACT</a></li>
      </ul>

      <div className="d-flex nav-buttons">
        <CartWidget />
        <UserWidget />
      </div>
    </nav>
  );
};

export default NavBar;
