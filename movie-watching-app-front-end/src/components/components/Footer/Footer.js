import logo from "./logo.png";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-right">
          <img src={logo} alt="Streamo Logo" />
          <p>
            Euismod tempor incididunt ut labore et minim ven exerc itation ulla
            mco laboris naliquip ex ea comm.
          </p>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-container-left">
          <div className="footer-links">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Series</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">TV Series</a>
                </li>
                <li>
                  <a href="#">Tech</a>
                </li>
                <li>
                  <a href="#">Movie</a>
                </li>
                <li>
                  <a href="#">Video</a>
                </li>
                <li>
                  <a href="#">Live</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-icons">
            <img src="icon1.png" alt="Video Music" />
            <img src="icon2.png" alt="Movie Network" />
            <img src="icon3.png" alt="Juice Fresh" />
            <img src="icon4.png" alt="Press Coverage" />
            <img src="icon5.png" alt="Nutri Max" />
          </div>

          <div className="footer-bottom-links">
            <ul>
              <li>
                <a href="#">Report a Bug</a>
              </li>
              <li>
                <a href="#">Request a Feature</a>
              </li>
              <li>
                <a href="#">Content Grievance</a>
              </li>
              <li>
                <a href="#">Movie Request</a>
              </li>
              <li>
                <a href="#">Submit Your Story</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
