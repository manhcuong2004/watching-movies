import styles from "./styles.module.css";

function Movie(data) {
  return (
    <div className={styles.movie_container}>
      <a className={styles.movie_box} href="">
        <img src={data.img_src} />
        <div className={styles.movie_content}>
          <h3 className={styles.name}>{data.name}</h3>
          <p className={styles.quality}>quality : hD</p>
          <button className={styles.movie_button}>watch now</button>
        </div>
      </a>
    </div>
    // <div className={styles.movie_container}>
    //   <a className={styles.movie_box} href="">
    //     <img src="https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX72_CR0,0,72,107_.jpg" />
    //     <div className={styles.movie_content}>
    //       <h3 className={styles.name}>Gladiator</h3>
    //       <p className={styles.quality}>quality : HD</p>
    //       <button className={styles.movie_button}>watch now</button>
    //     </div>
    //   </a>
    // </div>
  );
}

export default Movie;
