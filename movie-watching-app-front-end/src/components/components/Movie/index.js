import styles from "./styles.module.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
function Movie(data) {
  const [imageError, setImageError] = useState(false);
  // Hàm xử lý lỗi ảnh
  const handleImageError = () => {
    setImageError(true); // Đánh dấu lỗi khi ảnh không thể tải
  };
  return (
    <div className={styles.movie_container}>
      <Link className={styles.movie_box} to={`/movie-page/${data.slug}`}>
        <img
          src={
            imageError
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNdDMh07sKHYXff2Q6UaHQ-WaoZDJGohM4Q&s"
              : data.img_src
          }
          onError={handleImageError}
        />
        <div className={styles.movie_content}>
          <h3 className={styles.name}>{data.name}</h3>
          <p className={styles.quality}>quality : {data.quality}</p>
          <button className={styles.movie_button}>
            <Link to={`/movie-page/${data.slug}`}>watch now</Link>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
