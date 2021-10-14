import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="text-center">
      <div className="container pt-3">
        <section className="mb-3">
          <a href="https://ar.linkedin.com/in/tomasceit" className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="https://github.com/tomasceit/" className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3">Design by Tomas Ceit - 2021</div>
    </footer>
  );
};

export default Footer;
