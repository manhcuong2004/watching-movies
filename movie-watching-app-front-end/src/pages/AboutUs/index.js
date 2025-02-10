import styles from "./styles.module.css";
import Nav from "../../components/components/Nav";
import Person from "../../components/components/Person";
import clsx from "clsx";

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <Nav />
      <div className={styles.container}>
        <div>
          <div className={styles.first}>
            <div className={styles.box}>
              <div className={styles.content}>
                <h2>Why choose us</h2>
                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut laqua. Ut enim ad minim veniam, quis
                </p>
                <p>
                  Lorem ipsut amet, consectetur adipisicing elit, sed do irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis
                </p>
              </div>
              <div className={styles.imgBox}>
                <img src="https://streamo.vuejstemplate.com/images/about/01.jpg" />
              </div>
            </div>
            <div className={clsx(styles.box, styles.about)}>
              <div>
                <h3>Our Mission</h3>
                <p>
                  Lorem ipsut amet, consectetur adipisicing elit, sed do irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non
                  proident, sununt .
                </p>
                <ol>
                  <li>
                    <i className="zmdi zmdi-check"></i>
                    Mod tempor incididunt ut laqua.
                  </li>
                  <li>
                    <i className="zmdi zmdi-check"></i>
                    Mod tempor incididunt ut laqua.
                  </li>
                  <li>
                    <i className="zmdi zmdi-check"></i>
                    Mod tempor incididunt ut laqua.
                  </li>
                </ol>
              </div>
              <div>
                <h3>Our Objective</h3>
                <p>
                  Lorem ipsut amet, consectetur adipisicing elit, sed do irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non
                  proident, sununt .
                </p>
                <p>
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt
                </p>
              </div>
              <div>
                <h3>Our Achievement</h3>
                <p>
                  Lorem ipsut amet, consectetur adipisicing elit, sed do irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non
                  proident, sununt .
                </p>
                <p>
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.same}>
          <div className={clsx(styles.second)}>
            <div className={styles.content}>
              <h2>Why Choose Us</h2>
              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut laqua. Ut enim ad minim veniam, quis
              </p>
            </div>
            <div className={styles.imgBox}>
              <img src="https://streamo.vuejstemplate.com/images/other/mokup-06.png" />
              <span>
                <i className="zmdi zmdi-play"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.third}>
            <div className={styles.box}>
              <img src="https://streamo.vuejstemplate.com/images/icon/cout-01.png" />
              <h3>240</h3>
              <p>Satisfied Customer</p>
            </div>
            <div className={styles.box}>
              <img src="https://streamo.vuejstemplate.com/images/icon/cout-01.png" />
              <h3>240</h3>
              <p>Satisfied Customer</p>
            </div>
            <div className={styles.box}>
              <img src="https://streamo.vuejstemplate.com/images/icon/cout-01.png" />
              <h3>240</h3>
              <p>Satisfied Customer</p>
            </div>
            <div className={styles.box}>
              <img src="https://streamo.vuejstemplate.com/images/icon/cout-01.png" />
              <h3>240</h3>
              <p>Satisfied Customer</p>
            </div>
          </div>
        </div>
        <div className={styles.same}>
          <div className={clsx(styles.four)}>
            <div className={styles.content}>
              <h2>Best Team</h2>
              <p>
                Adminim veniam, quis nostrud exercitation ullamco laboris nisi
                ut pariatur. Excepteur t labore et dolore magnam aliquam quaerat
              </p>
            </div>
            <div className={styles.person}>
              <Person />
              <Person />
              <Person />
              <Person />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
