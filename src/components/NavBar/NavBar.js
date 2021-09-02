import "./NavBar.css";
import logo from './logo1.png';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar d-flex flex-row">
        <a href="#" className="d-flex flex-row align-items-center">
          <img src={logo} alt="Logo del e-commerce" className="nav-logo" />
          <h1>VINTAGE <span>JERSEYS</span></h1>
        </a>
        
            <ul className="d-flex flex-row main-nav-items">
              <li className="nav-item"><a href="#">HOME</a></li>
              <li className="nav-item"><a href="#">ABOUT</a></li>
              <li className="nav-item"><a href="#">SHOP</a></li>
              <li className="nav-item"><a href="#">CONTACT</a></li>
            </ul>
        
      </nav>
    </header>
  );
};

export default NavBar;
