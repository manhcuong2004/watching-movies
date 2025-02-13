import styles from "./styles.module.css";
import Title_v2 from "../../components/components/Title_v2";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Movie from "../../components/components/Movie";
import { Link, useParams, useLocation } from "react-router-dom";
import { fetchApiTvSeries, fetchApiMovies } from "../../services/allService";
function MoviePage() {
  const location = useLocation();
  const path = location.pathname;

  const type = path.includes("tv") ? "tv" : "movie";

  const { slug, currentEpsiode } = useParams();

  const [data_movie, setDataMovie] = useState(null);
  const movie_box_ref = useRef();
  const [src, setSrc] = useState();

  const [movies_list, setMovies] = useState();
  const [tvseries_list, setTvseries] = useState();

  const getData = useCallback(async (type) => {
    if (type === "tv") {
      const [tvSeriesData] = await Promise.all([fetchApiTvSeries()]);
      setTvseries(tvSeriesData.tvseries);
    } else if (type === "movie") {
      const [moviesData] = await Promise.all([fetchApiMovies()]);
      setMovies(moviesData.movies);
    }
  }, []);

  useEffect(() => {
    if (type) {
      setMovies();
      setTvseries();
      setDataMovie();
      getData(type);
    }
  }, [type, slug, currentEpsiode]);

  useEffect(() => {
    let movieFound;
    if (type === "tv") {
      if (tvseries_list) {
        movieFound = tvseries_list.find((movie) => movie.movie.slug === slug);
      }
    } else {
      if (movies_list) {
        movieFound = movies_list.find((movie) => movie.movie.slug === slug);
      }
    }
    if (movieFound) {
      setDataMovie(movieFound);
      if (type === "tv") {
        const current_epsiode = movieFound.episodes[0].server_data.find(
          (esp) => esp.slug === currentEpsiode
        );
        setSrc(current_epsiode.link_embed);
      } else {
        setSrc(movieFound.episodes[0].server_data[0].link_embed);
      }
    }
  }, [tvseries_list, movies_list]);

  const updateParams = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const quantity = rootStyles.getPropertyValue("--quantity").trim();
    const margin = rootStyles.getPropertyValue("--margin").trim();
    const width = rootStyles.getPropertyValue("--width").trim();
    const next = rootStyles.getPropertyValue("--next").trim();
    return { quantity, margin, width, next };
  };
  useEffect(() => {
    if (!movie_box_ref.current) return;

    const movie_box = movie_box_ref.current;
    let count = 0;

    movie_box.style.transition = "transform 0.5s ease-in-out";

    const interval = setInterval(() => {
      const { width, next } = updateParams();
      const numberOfMovies = movie_box.children.length;
      if (numberOfMovies === 0) return;

      if (numberOfMovies - count <= 4) {
        count = 0;
      }

      movie_box.style.transform = `translateX(calc(${count} * (-${width} - ${next})))`;
      count++;
    }, 3000);
    const handelResize = () => {
      count = 0;
      movie_box.style.transform = `translateX(0)`;
    };
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
      clearInterval(interval);
    };
  }, []);

  const favourite_box_ref = useRef();

  const handleLike = (e) => {
    let eventTarget = e.nativeEvent.target;

    if (eventTarget.tagName !== "BUTTON") {
      eventTarget = eventTarget.closest("button");
    }

    if (!eventTarget) return;

    const favourite_box = favourite_box_ref.current;
    const like_button = favourite_box.querySelectorAll("button");

    like_button.forEach((button) => {
      console.log(button);
      if (button === eventTarget) {
        button.classList.toggle(styles.active);
      } else {
        button.classList.remove(styles.active);
      }
    });
  };

  return (
    <div className={styles.moviePage_container}>
      <div className={styles.title_box}>
        {data_movie && (
          <Title_v2
            name={data_movie ? data_movie.movie.name : ""}
            duration={data_movie ? data_movie.movie.time : ""}
            releaseDate={data_movie ? data_movie.movie.year : ""}
            category={data_movie ? data_movie.movie.category : ""}
            current_epsiode={data_movie && currentEpsiode ? currentEpsiode : ""}
          />
        )}
      </div>
      <div className={styles.main}>
        {data_movie && (
          <div className={styles.video_box}>
            <iframe
              src={src}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        )}
        {data_movie && currentEpsiode && (
          <div className={styles.epsiode_box}>
            <div className={styles.container_epsiode}>
              <h1>Toàn bộ các tập phim</h1>
              <div className={styles.epsiode_all}>
                {data_movie.episodes[0].server_data.map((epsiode) => (
                  <Link to={`/${type}/${slug}/${epsiode.slug}`}>
                    <div className={styles.epsiode}>
                      <div className={styles.img_box}>
                        <img src="" alt="" />
                      </div>
                      <div className={styles.content}>
                        <h3>{epsiode.name}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className={styles.content_box}>
          <div className={styles.direc}>
            <p>
              <span className={clsx(styles.highlight, styles.direction)}>
                Director :
              </span>
              {data_movie ? data_movie.movie.director : ""}
            </p>
            <p>
              <span className={clsx(styles.highlight, styles.starring)}>
                Starring :
              </span>
              {(data_movie && data_movie.movie.actor.join(" - ")) || ""}
            </p>
          </div>
          <p>{(data_movie && data_movie.movie.content) || ""}</p>

          <div className={styles.nav}>
            <div>
              <span className={clsx(styles.highlight, styles.share)}>
                Share :{" "}
              </span>
              <div className={styles.iconBox}>
                <button>
                  <i className="zmdi zmdi-facebook"></i>
                </button>
                <button>
                  <i className="zmdi zmdi-instagram"></i>
                </button>
                <button>
                  <i className="zmdi zmdi-linkedin-box"></i>
                </button>
              </div>
            </div>
            <div ref={favourite_box_ref}>
              <button onClick={handleLike}>
                <i className="zmdi zmdi-thumb-up"></i>
              </button>
              <button onClick={handleLike}>
                <i className="zmdi zmdi-thumb-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.movies_box}>
          <div className={styles.movie_container}>
            <div className={styles.movie_box} ref={movie_box_ref}>
              {(data_movie && tvseries_list) || (data_movie && movies_list)
                ? (tvseries_list
                    ? tvseries_list
                    : movies_list
                    ? movies_list
                    : ""
                  )
                    .filter((movie) => {
                      return (
                        movie.movie.category.some((cat) =>
                          data_movie.movie.category.some(
                            (subCat) => subCat.name === cat.name
                          )
                        ) && movie.movie.name !== data_movie.movie.name
                      );
                    })
                    .map((movie, idx) => {
                      let result;
                      if (tvseries_list) {
                        if (movie.movie.episode_current.includes("Hoàn Tất")) {
                          result =
                            movie.episodes[0].server_data[
                              movie.episodes[0].server_data.length - 1
                            ].slug;
                        } else {
                          const filteredResult =
                            movie.episodes[0].server_data.find(
                              (ep) => ep.name === movie.movie.episode_current
                            );
                          if (filteredResult) {
                            result = filteredResult.slug;
                          } else {
                            result =
                              movie.episodes[0].server_data[
                                movie.episodes[0].server_data.length - 1
                              ].slug;
                          }
                        }
                      }
                      return (
                        <Movie
                          key={idx}
                          name={movie.movie.name}
                          img_src={movie.movie.poster_url}
                          quality={movie.movie.quality}
                          slug={movie.movie.slug}
                          type={movie.movie.tmdb.type || "movie"}
                          currentEpsiode={currentEpsiode && result}
                        />
                      );
                    })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
