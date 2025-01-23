import styles from "./styles.module.css";
import { useEffect, useState } from "react";
function AutoNumber(data) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (number < data.total) {
        setNumber((pre) => pre + 1);
      } else {
        clearInterval(interval);
      }
    }, data.speed ? data.speed : 100);
    return () => clearInterval(interval);
  });
  return (
    <div className={styles.container}>
      <h1>{data.total ? number : 500}+</h1>
      <p>{data.text ? data.text : "total videos"}</p>
    </div>
  );
}

export default AutoNumber;
