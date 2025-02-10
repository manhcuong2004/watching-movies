import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function Sidebar_v2(data) {
  return (
    <div className={styles.container}>
      <Link to={`/${data.type}/${data.slug}/${data.currentEpsiode}`}>
        <img src={data && data.img} />
      </Link>
    </div>
  );
}
export default Sidebar_v2;
