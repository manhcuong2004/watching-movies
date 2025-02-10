import styles from "./styles.module.css";
import clsx from "clsx";

function Title_v2(data) {
  return (
    <div className={styles.title_box}>
      <h2>{data.name || "Land And Sea"}</h2>
      <div className={styles.content}>
        <p>{data.duration || "1hr 45minutes"}</p>
        <p>{data.releaseDate || "1994-03-10"}</p>
        <p>
          {data.category.map((item) => item.name).join(" - ") || "Romantic"}
        </p>
        {data.current_epsiode && (
          <p>
            Tập{" "}
            {
              data.current_epsiode.split("-")[
                data.current_epsiode.split("-").length - 1
              ]
            }
          </p>
        )}
      </div>
    </div>
  );
}

export default Title_v2;
