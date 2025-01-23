import Sidebar from "../../components/components/Sidebar";
import Movie from "../../components/components/Movie";
import styles from "./styles.module.css";
import Pagination from "../../components/components/Pagination";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movies() {
  const { categoryName, pageNumber } = useParams();
  const [data, setData] = useState();
  const currentPage = pageNumber || "page_1";
  const [movies, setMovies] = useState();
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
        movie.category.some(
          (cate) => cate.toLowerCase() === categoryName.toLowerCase()
        )
      );
      setMovies(filteredMovies);
    }
  }, [data, categoryName, pageNumber]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content_container}>
        <div className={styles.box}>
          {data &&
            movies &&
            movies.map((movie, idx) => {
              const cur = parseInt(
                currentPage.split("_")[currentPage.split("_").length - 1]
              );
              console.log(cur);
              const start = (cur - 1) * 12;
              const end = cur * 12;
              if (start <= idx && idx < end) {
                return (
                  <Movie
                    id={movie._id}
                    key={idx}
                    name={movie.name}
                    img_src={movie.banner}
                  />
                );
              }
            })}
        </div>
        {movies ? (
          <Pagination
            totalPage={movies.length % 12 !== 0 ? Math.floor(movies.length / 12) + 1 : movies.length / 12}
            currentPage={currentPage}
            type = 'movies'
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
