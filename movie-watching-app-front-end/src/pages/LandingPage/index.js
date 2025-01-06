import Movie from '../../components/components/Movie';
import styles from './styles.module.css';

const LandingPage = () => {
    return (
        <div>
            <div className={styles.landingPage}>
                <div className={styles.overlay}></div>
                <div className={styles.MainLandingPage}>
                <div className={styles.header}>
                    <div className={styles.logo}>   
                        <img src="https://streamo.vuejstemplate.com/images/logo/logo.png" alt="Logo" />
                    </div>
                    <button className={styles.signInBtn}>Sign In</button>
                </div>
                <div className={styles.mainContent}>
                    <h1 className={styles.title}>Endless movies, TV shows, and more.</h1>
                    <p className={styles.description}>Enjoy anywhere. Unsubscribe anytime.</p>
                    <p className={styles.subText}>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <form className={styles.emailForm}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className={styles.emailInput}
                        />  
                        <button className={styles.getStartedBtn} type='submit'>Get Started</button>
                    </form>
                </div>
                </div>
            </div>
            <div className={styles.movie_site_info}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Enjoy Watching Them on TV.</h1>
                    <p className={styles.description}>Whether it’s Smart TV, Xbox, Apply TV, Watch Your Favorite Program with Great Pleasure.</p>
                </div>
                <img src='https://streamo.vuejstemplate.com/images/landing/3.png'/>       
            </div>
            <div className={styles.blackbox}></div>
            <div className={styles.movie_site_info}>
                <img src='https://streamo.vuejstemplate.com/images/landing/4.png'/>
                <div className={styles.content}>
                    <h1 className={styles.title}>Download Favorites, Watch them Offline!.</h1>
                    <p className={styles.description}>It’s super easy to save your favorite shows!</p>
                </div>   
            </div>
            <div className={styles.discount}>
                <div className={styles.boxDiscount}>
                    <div className={styles.price}>
                        <h2>$0.00</h2>
                        <h4>Free</h4>
                    </div>
                    <ul>
                        <li>laboris nisi ut pariatur.</li>
                        <li>Secure Service</li>
                        <li>laboris nisi ut pariatur.</li>
                        <li>70 Cup of coffee</li>
                        <li>Awesome Support</li>
                        <li>Offline Download</li>
                        <li>nam aliquam</li>
                    </ul>
                    <button>Choose A Plan</button>
                </div>  
                <div className={styles.boxDiscount}>
                    <div className={styles.price}>
                        <h2>$100</h2>
                        <h4>Premium</h4>
                    </div>
                    <ul>
                        <li>laboris nisi ut pariatur.</li>
                        <li>Secure Service</li>
                        <li>laboris nisi ut pariatur.</li>
                        <li>200 Cup of coffee</li>
                        <li>Awesome Support</li>
                        <li>Offline Download</li>
                        <li>nam aliquam</li>
                    </ul>
                    <button>Choose A Plan</button>
                </div> 
                <div className={styles.boxDiscount}>
                    <div className={styles.price}>
                        <h2>$200</h2>
                        <h4>Standard</h4>
                    </div>
                    <ul>
                        <li>laboris nisi ut pariatur.</li>
                        <li>Secure Service</li>
                        <li>laboris nisi ut pariatur.</li>
                        <li>500 Cup of coffee</li>
                        <li>Awesome Support</li>
                        <li>Offline Download</li>
                        <li>nam aliquam</li>
                    </ul>
                    <button>Choose A Plan</button>
                </div> 
            </div>  
            <div className={styles.movie_site_info}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Watch Anywhere You Want.</h1>
                    <p className={styles.description}>Watch an endless number of shows, on your phone, tablet, laptop, and TV.</p>
                </div>
                <img src='https://streamo.vuejstemplate.com/images/landing/2.png'/>       
            </div>
            <div className={styles.PopularMovies}>
                <h1>Popular Movies And Shows</h1>
                <div className={styles.boxPopularMovies}>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                </div>
            </div>
            <div className={styles.QnA}>
                <h1>Frequently Asked Questions</h1>
                <div className={styles.boxQnA}>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

