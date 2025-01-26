import Sidebar from "../../components/components/Sidebar";
import Movie from "../../components/components/Movie";
import Title from "../../components/components/Title";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

function Home() {
  const [data, setData] = useState(null);
  const slidesRef = useRef();
  const boxRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const updateParams = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const quantity = rootStyles.getPropertyValue("--quantity").trim();
    const margin = rootStyles.getPropertyValue("--margin").trim();
    const width = rootStyles.getPropertyValue("--width").trim();
    const next = rootStyles.getPropertyValue("--next").trim();
    return { quantity, margin, width, next };
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/movie")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextButton();
    }, 3000);

    // Dọn dẹp khi component bị unmounted hoặc trước lần chạy mới
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const slides = slidesRef.current;
    slides.style.transform = `translateX(calc(-${currentIndex * 100}%))`;
  }, [currentIndex]);

  const handleNextButton = () => {
    const slides = slidesRef.current;
    const numberOfSlides = slides.children.length;
    setCurrentIndex((prev) => (prev + 1 < numberOfSlides ? prev + 1 : 0));
  };

  const handlePrevButton = () => {
    const slides = slidesRef.current;
    const numberOfSlides = slides.children.length;
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : numberOfSlides - 1));
  };

  const handleTouchStart = (event) => {
    setStartX(getPositionX(event));
    setIsDragging(true);
    setPrevTranslate(-currentIndex * 100);
    slidesRef.current.style.transition = "none";
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const translateValue =
      prevTranslate +
      ((currentPosition - startX) / slidesRef.current.offsetWidth) * 100;
    setCurrentTranslate(translateValue);
    slidesRef.current.style.transform = `translateX(${translateValue}%)`;
  };

  const handleTouchEnd = () => {
    slidesRef.current.style.transition = "transform 0.5s ease-out";
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -30) {
      handleNextButton();
    } else if (movedBy > 30) {
      handlePrevButton();
    } else {
      slidesRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    setCurrentTranslate(0);
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };

  const [currentMovies, setCurrentMovies] = useState([]);
  useEffect(() => {
    if (data?.category?.length) {
      setCurrentMovies(new Array(data.category.length).fill(0));
    }
  }, [data]);

  const handleNextButtonMovie = (index) => {
    const { quantity, width, next } = updateParams();

    const box = boxRefs.current[index];
    if (box.children.length - currentMovies[index] <= quantity) return;
    box.style.transform = `translateX(calc(${
      currentMovies[index] + 1
    } * (-${width} - ${next})))`;
    setCurrentMovies((prev) => {
      const updatedMovies = [...prev];
      updatedMovies[index] = updatedMovies[index] + 1;
      return updatedMovies;
    });
  };

  const handlePrevButtonMovie = (index) => {
    const { width, next } = updateParams();
    if (currentMovies[index] === 0) return;
    const box = boxRefs.current[index];
    box.style.transform = `translateX(calc(${
      currentMovies[index] - 1
    } * (-${width} - ${next})))`;
    setCurrentMovies((prev) => {
      const updatedMovies = [...prev];
      updatedMovies[index] = updatedMovies[index] - 1;
      return updatedMovies;
    });
  };
  useEffect(() => {
    const handleResize = () => {
      if (boxRefs.current) {
        boxRefs.current.forEach((box) => {
          box.style.transform = "translateX(0)";
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <main>
        <div className={styles.slider_container}>
          <div
            className={styles.slides}
            ref={slidesRef}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={() => isDragging && handleTouchEnd()}
          >
            {data &&
              data.movies
                .slice(0, 4)
                .map((movie, index) => (
                  <Sidebar
                    key={index}
                    img={movie.movie.thumb_url}
                    name={movie.movie.name}
                    category={movie.movie.category}
                    time={movie.movie.time}
                    slug={movie.movie.slug}
                  />
                ))}
          </div>
          <div className={styles.sidebar_arrow}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevButton();
              }}
            >
              <i className="zmdi zmdi-chevron-left"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextButton();
              }}
            >
              <i className="zmdi zmdi-chevron-right"></i>
            </button>
          </div>
        </div>
        {data &&
          data.category.map((category, index) => {
            const filteredMovies = data.movies.filter((movie) =>
              movie.movie.category.some((cat) =>
                cat.name.includes(category.name)
              )
            );

            return (
              filteredMovies.length > 5 && (
                <div className={styles.container} key={index}>
                  <Title name={category.name} />
                  <div className={styles.title_arrow_box}>
                    <button onClick={() => handlePrevButtonMovie(index)}>
                      <i
                        className={clsx(
                          "zmdi zmdi-chevron-left",
                          styles.arrow_icon
                        )}
                      ></i>
                    </button>
                    <button onClick={() => handleNextButtonMovie(index)}>
                      <i
                        className={clsx(
                          "zmdi zmdi-chevron-right",
                          styles.arrow_icon
                        )}
                      ></i>
                    </button>
                  </div>
                  <div className={styles.swiper_container}>
                    <div
                      className={styles.box}
                      ref={(el) => (boxRefs.current[index] = el)}
                    >
                      {filteredMovies.map((movie) => (
                        <Movie
                          id={movie._id}
                          key={movie._id}
                          name={movie.movie.name}
                          img_src={movie.movie.poster_url}
                          quality={movie.movie.quality}
                          slug={movie.movie.slug}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            );
          })}
      </main>
    </div>
  );
}

export default Home;
