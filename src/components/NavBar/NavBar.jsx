import "./NavBar.css";
import * as React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import UserWidget from "../UserWidget/UserWidget.jsx";
import { useUser } from "../../context/UserContext"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userLogged } = useUser();
  
  return (
    <nav id="navbar" className="navbar d-flex align-content-center navbar-expand-lg sticky-top">
      <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="dark-blue-text"><i className="fas fa-bars fa-1x" /></span>
      </button>

      <Link id="mainLogo" to='/home' >
        <h1>VINTAGE <span>JERSEYS</span></h1>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="d-flex main-nav-items mb-0">
          <Link to='/category/national_teams' ><li className="nav-item">SELECCIONES</li></Link>
          <Link to='/category/primera_division_argentina' ><li className="nav-item">PRIMERA ARGENTINA</li></Link>
          <Link to='/category/premier_league' ><li className="nav-item">PREMIER LEAGUE</li></Link>
          <Link to='/category/la_liga' ><li className="nav-item">LA LIGA</li></Link>
          <Link to='/category/serie_a' ><li className="nav-item">SERIE A</li></Link>
        </ul>
      </div>

      <div className="d-flex nav-buttons">
        <Link to='/cart' className="d-flex" ><CartWidget /></Link>
        <Link to={userLogged ? '/myAccount' : '/myAccount/signIn'} className="d-flex justify-content-center user"><UserWidget /></Link>
      </div>
    </nav>
  );
};

export default NavBar;
