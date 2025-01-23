import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function Nav(data) {
  return (
    <div className={styles.container}>
      <h1 className={styles.cur}>{data.name ? data.name : 'About Us'}</h1>
      <div className={styles.box}>
        <Link to="/">
          <p className={styles.home}>Home</p>
        </Link>
        <p>{data.name ? data.name : 'About Us'}</p>
      </div>
    </div>
  );
}

export default Nav;
