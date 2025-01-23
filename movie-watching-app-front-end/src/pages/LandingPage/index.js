import Movie from "../../components/components/Movie";
import styles from "./styles.module.css";
import Service from "../../components/components/Service";
import Question from "../../components/components/Question";
import AutoNumber from "../../components/components/autoNumber";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.landingPage}>
        <div className={styles.overlay}></div>
        <div className={styles.MainLandingPage}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img
                src="https://streamo.vuejstemplate.com/images/logo/logo.png"
                alt="Logo"
              />
            </div>
            <Link to="/login">
              <button className={styles.signInBtn}>Sign In</button>
            </Link>
          </div>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>
              Endless movies, TV shows, and more.
            </h1>
            <p className={styles.description}>
              Enjoy anywhere. Unsubscribe anytime.
            </p>
            <p className={styles.subText}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className={styles.emailForm}>
              <input
                type="email"
                placeholder="Email Address"
                className={styles.emailInput}
              />
              <Link to="/register">
                <button className={styles.getStartedBtn} type="submit">
                  Get Started
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.movie_site_info}>
        <div className={styles.content}>
          <h1 className={styles.title}>Enjoy Watching Them on TV.</h1>
          <p className={styles.description}>
            Whether it’s Smart TV, Xbox, Apply TV, Watch Your Favorite Program
            with Great Pleasure.
          </p>
        </div>
        <img src="https://streamo.vuejstemplate.com/images/landing/3.png" />
      </div>
      <div className={styles.blackbox}>
        <AutoNumber total={500} text={"total videos"} speed={10} />
        <AutoNumber total={10} text={"position"} speed={500} />
        <AutoNumber total={200} text={"Subscribers"} speed={30} />
        <AutoNumber total={156} text={"Awards"} speed={40} />
      </div>
      <div className={styles.movie_site_info}>
        <img src="https://streamo.vuejstemplate.com/images/landing/4.png" />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Download Favorites, Watch them Offline!.
          </h1>
          <p className={styles.description}>
            It’s super easy to save your favorite shows!
          </p>
        </div>
      </div>
      <div className={styles.discount}>
        <Service />
        <Service price={100} level={"Premium"} check={true} />
        <Service price={200} level={"Standard"} />
      </div>
      <div className={styles.movie_site_info}>
        <div className={styles.content}>
          <h1 className={styles.title}>Watch Anywhere You Want.</h1>
          <p className={styles.description}>
            Watch an endless number of shows, on your phone, tablet, laptop, and
            TV.
          </p>
        </div>
        <img src="https://streamo.vuejstemplate.com/images/landing/2.png" />
      </div>
      <div className={styles.PopularMovies}>
        <h1>Popular Movies And Shows</h1>
        <div className={styles.boxPopularMovies}>
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
      <div className={styles.QnA}>
        <h1>Frequently Asked Questions</h1>
        <div className={styles.boxQnA}>
          <Question question={"What is streamo?"} />
          <Question question={"How expensive is Streamo?"} />
          <Question question={"Can I watch with Streamo everywhere?"} />
          <Question question={"How easy is cancelling the subscription?"} />
          <Question question={"What else can I watch with Streamo?"} />
          <Question question={"How good is Streamo for kids?"} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
