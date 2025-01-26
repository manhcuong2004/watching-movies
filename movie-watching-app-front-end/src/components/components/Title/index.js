import styles from "./styles.module.css";
import clsx from "clsx";

function Title(data) {
  return (
    <div className={styles.title_container}>
      <div className={styles.title_content}>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
}

export default Title;
