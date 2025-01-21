import styles from "./styles.module.css";
import clsx from "clsx";

function Title(data) {
  return (
    <div className={styles.title_container}>
      <div className={styles.title_content}>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
}

export default Title;
