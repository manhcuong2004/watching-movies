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

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((response) => response.json())
      .then((data) => setData(data))
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
    console.log("total:", slides.children.length, "current:", currentIndex + 1);
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
      setCurrentMovies(new Array(data.category.length).fill(0)); // Khởi tạo trạng thái cho mỗi box
    }
  }, [data]);

  const handleNextButtonMovie = (index) => {
    
  };

  const handlePrevButtonMovie = (index) => {
    return;
  };

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
            <Sidebar />
            <Sidebar
              img={
                "https://streamo.vuejstemplate.com/images/slider/slider-hm4-1.jpg "
              }
            />
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
          data.category.map((category, index) => (
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
              <div
                className={styles.box}
                ref={(el) => (boxRefs.current[index] = el)}
              >
                {data.movies.map(
                  (movie, idx) =>
                    movie.category.includes(category.name) && (
                      <Movie
                        key={idx}
                        name={movie.name}
                        img_src={movie.banner}
                      />
                    )
                )}
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}

export default Home;
