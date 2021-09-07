import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.js";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar d-flex">
        <a href="#" className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-basketball" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="#e83630" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="5.65" y1="5.65" x2="18.35" y2="18.35" />
            <line x1="5.65" y1="18.35" x2="18.35" y2="5.65" />
            <path d="M12 3a9 9 0 0 0 9 9" />
            <path d="M3 12a9 9 0 0 1 9 9" />
          </svg>
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
          <button className="user-logo">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
