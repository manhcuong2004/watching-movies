import styles from "./styles.module.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { Link } from "react-router-dom";
function Sidebar(data) {
  return (
    <div className={styles.sidebar}>
      <div
        className={styles.sidebar_container}
        style={{
          backgroundImage: `url(${
            data.img ||
            "https://streamo.vuejstemplate.com/images/slider/slider-hm4-2.jpg"
          })`,
        }}
      >
        <div className={styles.sidebar_content}>
          <h1 className={styles.name}>{data.name || "land and sea"}</h1>
          <div className={styles.box}>
            <h3 className={styles.genre}>
              {data.category.map((item) => item.name).join(" - ") || "Romantic"}
            </h3>
            <h3 className={styles.duration}>{data.time || "1hr 45 minutes"}</h3>
          </div>
          <Link
            to={
              data.currentEpsiode
                ? `/${data.type}/${data.slug}/${data.currentEpsiode}`
                : `/${data.type}/${data.slug}`
            }
          >
            <button className={styles.sidebar_button}>watch now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
