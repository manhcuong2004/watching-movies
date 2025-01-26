import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
function Header() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [series, setSeries] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((reponse) => reponse.json())
      .then((data) => {
        setData(data);
        console.log("Suscess:", data);
      });
  }, []);
  const [isSearch, setIsSearch] = useState();
  const [isDisplay, setIsDisplay] = useState();
  const [isNoti, setIsNoti] = useState();
  const popUp_ref = useRef();
  useEffect(() => {
    const handleResize = () => {
      const popUp = popUp_ref.current;
      if (window.innerWidth > 1024) {
        if (popUp && !popUp.classList.contains(styles.hidden)) {
          popUp.classList.add(styles.hidden);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const event = e.nativeEvent;
    const parentElement = event.target.closest(`.check`);
    if (parentElement) {
      parentElement.classList.toggle(styles.active);
    }
  };
  const handlePopUp = (e) => {
    e.stopPropagation();
    const popUp = popUp_ref.current;
    if (popUp) {
      popUp.classList.toggle(styles.hidden);
    }
  };
  useEffect(() => {
    if (data) {
      const categories = data.category.map((cat) => cat);
      const filteredCategories = categories.filter((category) =>
        data.movies.some((movie) =>
          movie.movie.category.some((cat) => cat.slug === category.slug)
        )
      );
      const filteredCategories_series = categories.filter((category) =>
        data.tvseries.some((movie) =>
          movie.movie.category.some((cat) => cat.slug === category.slug)
        )
      );
      setSeries(filteredCategories_series);
      setCategory(filteredCategories);
    }
  }, [data]);
  return (
    <header className={styles.header_container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src="/img/logo.png" alt="" />
        </div>
        <div className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/series">
            Series
            <div className={styles.subNav} onClick={(e) => e.stopPropagation()}>
              {data &&
                series &&
                series.map((cat, index) => (
                  <Link key={index} to={`/series/${cat.slug}`} > 
                    {cat.name} Series
                  </Link>
                ))}
            </div>
          </Link>
          <Link>
            Movies
            <div className={styles.subNav} onClick={(e) => e.stopPropagation()}>
              {data &&
                category &&
                category.map((cat, index) => (
                  <Link key={index} to={`/movies/${cat.slug}`} >
                    {cat.name} Movies
                  </Link>
                ))}
            </div>
          </Link>
          <Link>
            Pages
            <div className={styles.subNav}>
              <Link to="/about-us">About Us</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/my-profile">My Profile</Link>
              <Link to="/my-account">My Account</Link>
            </div>
          </Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <div className={clsx(styles.inputSearch, !isSearch && styles.hidden)}>
          <input type="text" id="search" placeholder="Search" />
          <i className="zmdi zmdi-search"></i>
        </div>
        <div className={styles.search} onClick={() => setIsSearch(!isSearch)}>
          <i className="zmdi zmdi-search"></i>
        </div>
        <div className={styles.noti}>
          <i
            class="zmdi zmdi-notifications"
            onClick={() => {
              setIsNoti(!isNoti);
              setIsDisplay(false);
            }}
          ></i>
          <span>0</span>
          <div className={clsx(styles.nav, !isNoti && styles.hidden)}>
            <h5>Notifications</h5>
            <div className={styles.subNoti}>
              <img
                src="https://streamo.vuejstemplate.com/images/review/author-01.png"
                alt="user"
              />
              <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>21 hours ago</p>
              </div>
            </div>
            <div className={styles.subNoti}>
              <img
                src="https://streamo.vuejstemplate.com/images/review/author-01.png"
                alt="user"
              />
              <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>21 hours ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.user}>
          <img
            src="https://streamo.vuejstemplate.com/images/review/author-01.png"
            alt="user"
            onClick={() => {
              setIsNoti(false);
              setIsDisplay(!isDisplay);
            }}
          />
          <div className={clsx(styles.nav, !isDisplay && styles.hidden)}>
            <Link to="/my-profile">My Profile</Link>
            <Link to="/my-account">My Account</Link>
            <Link to="/landing-page">Sign Out</Link>
          </div>
        </div>
        <Link to="/contact">
          <button>subscribe now</button>
        </Link>
        <button className={styles.menu} onClick={handlePopUp}>
          <i className="zmdi zmdi-menu"></i>
        </button>
      </div>
      <div
        className={clsx(styles.popUp, styles.hidden)}
        ref={popUp_ref}
        onClick={handlePopUp}
      >
        <div
          className={styles.info_popup}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={clsx(styles.logo_popup)}>
            <img
              src="https://streamo.vuejstemplate.com/images/logo/logo-2.png"
              alt=""
            />
            <button className={styles.close} onClick={handlePopUp}>
              <i class="zmdi zmdi-close"></i>
            </button>
          </div>
          <div className={styles.nav}>
            <Link to="/" onClick={handlePopUp}>
              Home
            </Link>
            <Link className={clsx(styles.more, "check")}>
              <div className={styles.content}>
                <Link to="/series" onClick={handlePopUp}>
                  Series
                </Link>
                <span onClick={handleClick}>
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className={styles.subNav_popup}>
                {data &&
                  series &&
                  series.map((cat, index) => (
                    <Link key={index} to={`/series/${cat.slug}`}>
                      {cat.name} Series
                    </Link>
                  ))}
              </div>
            </Link>
            <Link className={clsx(styles.more, "check")}>
              <div className={styles.content}>
                <Link>Movies</Link>
                <span onClick={handleClick}>
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className={styles.subNav_popup}>
                {data &&
                  category &&
                  category.map((cat, index) => (
                    <Link key={index} to={`/movies/${cat.slug}`}>
                      {cat.name} Movies
                    </Link>
                  ))}
              </div>
            </Link>
            <Link className={clsx(styles.more, "check")}>
              <div className={styles.content}>
                <Link>Pages</Link>
                <span onClick={handleClick}>
                  <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div className={styles.subNav_popup}>
                <Link to="/about-us" onClick={handlePopUp}>
                  About Us
                </Link>
                <Link to="/pricing" onClick={handlePopUp}>
                  Pricing
                </Link>
                <Link to="/faq" onClick={handlePopUp}>
                  FAQ
                </Link>
                <Link to="/my-profile" onClick={handlePopUp}>
                  My Profile
                </Link>
                <Link to="/my-account" onClick={handlePopUp}>
                  My Account
                </Link>
              </div>
            </Link>
            <Link to="/pricing" onClick={handlePopUp}>
              Pricing
            </Link>
            <Link to="/contact" onClick={handlePopUp}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
