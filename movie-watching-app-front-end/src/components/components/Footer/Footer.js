import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_right}>
          <img src="/img/logo.png" alt="Streamo Logo" />
          <p>
            Euismod tempor incididunt ut labore et minim ven exerc itation ulla
            mco laboris naliquip ex ea comm.
          </p>
          <div className={styles.footer_social}>
            <Link to="">
              <i className="zmdi zmdi-facebook"></i>
            </Link>
            <Link to="">
              <i className="zmdi zmdi-twitter"></i>
            </Link>
            <Link to="">
              <i className="zmdi zmdi-linkedin"></i>
            </Link>
            <Link to="">
              <i className="zmdi zmdi-instagram"></i>
            </Link>
          </div>
        </div>
        <div className={styles.footer_container_left}>
          <div className={styles.footer_links}>
            <Link to="">Home</Link>
            <Link to="">About Us</Link>
            <Link to="">Series</Link>
            <Link to="">Contact Us</Link>
            <Link to="">TV Series</Link>
            <Link to="">Tech</Link>
            <Link to="">Movie</Link>
            <Link to="">Video</Link>
            <Link to="">Live</Link>
          </div>

          <div className={styles.footer_icons}>
            <img
              src="https://streamo.vuejstemplate.com/images/brand/1.png"
              alt=""
            />
            <img
              src="https://streamo.vuejstemplate.com/images/brand/2.png"
              alt=""
            />
            <img
              src="https://streamo.vuejstemplate.com/images/brand/3.png"
              alt=""
            />
            <img
              src="https://streamo.vuejstemplate.com/images/brand/4.png"
              alt=""
            />
            <img
              src="https://streamo.vuejstemplate.com/images/brand/5.png"
              alt=""
            />
            <img
              src="https://streamo.vuejstemplate.com/images/brand/6.png"
              alt=""
            />
          </div>

          <div className={styles.footer_bottom_links}>
            <Link to="">Report a Bug</Link>
            <Link to="">Request a Feature</Link>
            <Link to="">Content Grievance</Link>
            <Link to="">Movie Request</Link>
            <Link to="">Submit Your Story</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of Services</Link>
            <Link to="">Support</Link>
          </div>
        </div>
      </div>
      <div className={styles.footer_container_second}>
        <div className={styles.container}>
          <div className={styles.copyright}>
            <p>Copyright STREAMO</p>
          </div>
          <div className={styles.login}>
            <p>
              Already have an Account? <Link to="/login">LOGIN</Link>
            </p>
            <Link to="/pricing">
              <button>become a member</button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
