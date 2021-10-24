import "./NavBar.css";
import * as React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import UserWidget from "../UserWidget/UserWidget.jsx";
import { useUser } from "../../context/UserContext"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userLogged } = useUser();
  const [category, setCategory] = React.useState('')
  return (
    <nav id="navbar" className="navbar d-flex align-content-center navbar-expand-lg sticky-top">
      <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <span className="dark-blue-text"><i className="fas fa-bars fa-1x"></i></span>
      </button>

      <Link id="mainLogo" to='/home' onClick={() => setCategory('')}>
        <h1>VINTAGE <span>JERSEYS</span></h1>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="d-flex main-nav-items mb-0">
          <Link to='/category/national_teams' onClick={() => setCategory('sel')}><li className={category === 'sel' ? "nav-item red" : "nav-item"}>SELECCIONES</li></Link>
          <Link to='/category/primera_division_argentina' onClick={() => setCategory('arg')}><li className={category === 'arg' ? "nav-item red" : "nav-item"}>PRIMERA ARGENTINA</li></Link>
          <Link to='/category/premier_league' onClick={() => setCategory('eng')}><li className={category === 'eng' ? "nav-item red" : "nav-item"}>PREMIER LEAGUE</li></Link>
          <Link to='/category/la_liga' onClick={() => setCategory('esp')}><li className={category === 'esp' ? "nav-item red" : "nav-item"}>LA LIGA</li></Link>
          <Link to='/category/serie_a' onClick={() => setCategory('it')}><li className={category === 'it' ? "nav-item red" : "nav-item"}>SERIE A</li></Link>
        </ul>
      </div>

      <div className="d-flex nav-buttons">
        <Link to='/cart' className="d-flex" onClick={() => setCategory('')}><CartWidget /></Link>
        <Link to={userLogged ? '/myAccount' : '/myAccount/signIn'} className="d-flex justify-content-center user" onClick={() => setCategory('')}><UserWidget /></Link>
      </div>
    </nav>
  );
};

export default NavBar;
