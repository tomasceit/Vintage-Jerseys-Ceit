import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="text-center">
      <div className="container pt-3">
        <section className="mb-3">
          <Link to="/" className="btn btn-link btn-floating btn-lg text-dark m-1">
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link to="/" className="btn btn-link btn-floating btn-lg text-dark m-1">
            <i className="fab fa-twitter"></i>
          </Link>

          <Link to="/"  className="btn btn-link btn-floating btn-lg text-dark m-1">
            <i className="fab fa-google"></i>
          </Link>

          <Link to="/" className="btn btn-link btn-floating btn-lg text-dark m-1">
            <i className="fab fa-instagram"></i>
          </Link>

          <Link  to="/" className="btn btn-link btn-floating btn-lg text-dark m-1">
            <i className="fab fa-linkedin"></i>
          </Link>

          <Link to="/" className="btn btn-link btn-floating btn-lg text-dark m-1">
            <i className="fab fa-github"></i>
          </Link>
        </section>
      </div>
      <div className="text-center p-3">Design by Tomas Ceit - 2021</div>
    </footer>
  );
};

export default Footer;
