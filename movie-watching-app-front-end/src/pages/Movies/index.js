import Sidebar from "../../components/components/Sidebar";
import Movie from "../../components/components/Movie";
import styles from "./styles.module.css";
import Pagination from "../../components/components/Pagination";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

function Movies() {
  const { categoryName, pageNumber } = useParams();
  const [data, setData] = useState();
  const currentPage = pageNumber || "page_1";
  const [movies, setMovies] = useState();
  const [current, setCurrent] = useState(0);
  const slides_ref = useRef();
  useEffect(() => {
    fetch("http://localhost:5000/api/movie")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("Success:", data);
        console.log("categoryName:", categoryName);
        console.log("pageNumber:", currentPage);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  useEffect(() => {
    if (data) {
      const filteredMovies = data.movies.filter((movie) =>
        movie.movie.category.some(
          (cate) => cate.slug.toLowerCase() === categoryName.toLowerCase()
        )
      );
      setMovies(filteredMovies);
    }
  }, [data, categoryName, pageNumber]);
  useEffect(() => {
    const slides = slides_ref.current;
    if (slides) {
      slides.style.transition = "all .5s ease";
      slides.style.transform = `translateX(calc(${current} * -100%))`;
    }
  }, [current]);
  useEffect(() => {
    const slides = slides_ref.current;
    const interval = setInterval(() => {
      setCurrent((pre) => {
        if (pre + 1 < slides.children.length) {
          return pre + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const handleNextClick = () => {
    const slides = slides_ref.current;
    setCurrent((pre) => {
      if (pre + 1 < slides.children.length) {
        return pre + 1;
      } else {
        return 0;
      }
    });
  };
  const handlePrevClick = () => {
    const slides = slides_ref.current;
    setCurrent((pre) => {
      if (pre - 1 < 0) {
        return slides.children.length - 1;
      } else {
        return pre - 1;
      }
    });
  };
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const handleTouchStart = (event) => {
    setStartX(getPositionX(event));
    setIsDragging(true);
    setPrevTranslate(-current * 100);
    slides_ref.current.style.transition = "none";
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const translateValue =
      prevTranslate +
      ((currentPosition - startX) / slides_ref.current.offsetWidth) * 100;
    setCurrentTranslate(translateValue);
    slides_ref.current.style.transform = `translateX(${translateValue}%)`;
  };

  const handleTouchEnd = () => {
    slides_ref.current.style.transition = "transform 0.5s ease-out";
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -30) {
      handleNextClick();
    } else if (movedBy > 30) {
      handlePrevClick();
    } else {
      slides_ref.current.style.transform = `translateX(-${current * 100}%)`;
    }
    setCurrentTranslate(0);
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar_container}>
        <div
          className={styles.slides}
          ref={slides_ref}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={() => isDragging && handleTouchEnd()}
        >
          {data &&
            movies &&
            movies
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
              handlePrevClick();
            }}
          >
            <i className="zmdi zmdi-chevron-left"></i>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextClick();
            }}
          >
            <i className="zmdi zmdi-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className={styles.content_container}>
        <div className={styles.box}>
          {data &&
            movies &&
            movies.map((movie, idx) => {
              const cur = parseInt(
                currentPage.split("_")[currentPage.split("_").length - 1]
              );
              const start = (cur - 1) * 12;
              const end = cur * 12;
              if (start <= idx && idx < end) {
                return (
                  <Movie
                    id={movie._id}
                    key={movie._id}
                    name={movie.movie.name}
                    img_src={movie.movie.poster_url}
                    quality={movie.movie.quality}
                    slug={movie.movie.slug}
                  />
                );
              }
            })}
        </div>
        {movies ? (
          <Pagination
            totalPage={
              movies.length % 12 !== 0
                ? Math.floor(movies.length / 12) + 1
                : movies.length / 12
            }
            currentPage={currentPage}
            type="movies"
            category={categoryName}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Movies;
